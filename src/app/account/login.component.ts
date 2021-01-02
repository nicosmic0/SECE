import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AccountService, AlertService } from '@app/core/_services';

@Component({ templateUrl: 'login.component.html' })
export class LoginComponent implements OnInit {
    form: FormGroup;
    loading = false;
    submitted = false;

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private accountService: AccountService,
        private alertService: AlertService
    ) { }

    ngOnInit() {
        this.form = this.formBuilder.group({
            email: ['', Validators.required],
            password: ['', Validators.required]
        });
    }

    // convenience getter for easy access to form fields
    get f() { return this.form.controls; }

    onSubmit() {
        this.submitted = true;

        // reset alerts on submit
        this.alertService.clear();

        // stop here if form is invalid
        if (this.form.invalid) {
            return;
        }

        this.loading = true;
        this.accountService.login(this.f.email.value, this.f.password.value)
            .pipe(first())
            .subscribe({
                next: () => {
                    // get return url from query parameters or default to home page
                    this.redirectByRol();
                },
                error: error => {
                    this.alertService.error(error);
                    this.loading = false;
                }
            });
    }

    redirectByRol(){
        let userRol: string;
        let returnUrl: string = '/';
        this.accountService.getUserByEmail(this.f.email.value).subscribe(user => {
            userRol = user.rol
            switch (userRol) {
                case 'admin':
                    console.log('admin');
                    returnUrl = '/admin';
                    break;
                case 'secre':
                    console.log('secre');
                    returnUrl = '/secretario';
                    break;
                case 'estu':
                    console.log('estu');
                    break;
            
                default:
                    // console.log(`userRol = ${userRol}`);
                    returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
                    break;
                }
                this.router.navigateByUrl(returnUrl);
        });
    }
}