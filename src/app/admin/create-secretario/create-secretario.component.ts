import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Carrera } from '@app/core/models/carrera.model';
import { AccountService } from '@app/core/services';
import { CarreraService } from '@app/core/services/carrera.service';

import { MyValidators } from '../../utils/validators';

@Component({
  selector: 'app-create-secretario',
  templateUrl: './create-secretario.component.html',
  styleUrls: ['./create-secretario.component.less']
})
export class CreateSecretarioComponent implements OnInit {

  form!: FormGroup;
  carrerasSinSecretario!: Carrera[];

  constructor(
    private accountService: AccountService,
    private formBuilder: FormBuilder,
    private carreraService: CarreraService
  ) {
    this.buildForm();
  }

  ngOnInit(): void {
    this.getCarrerasSinSecretario();
  }

  private buildForm(){
    this.form = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email, MyValidators.isUcmEmail], MyValidators.isUserEmailAvilable(this.accountService)],
      carrera: [, [Validators.required]],
      rol: ['secre', Validators.required],
      password: [new Date().getTime().toString().split('0').reverse().join('x'), Validators.required]
    });
  }

  saveSecretario(evento: Event){
    evento.preventDefault();
    if(this.form.valid){
      this.accountService.register(this.form.value).subscribe(resp => {
        console.log(this.form.value);
        
      });
    }
  }

  getCarrerasSinSecretario(){
    this.accountService.getAllSecretarios().subscribe(secretarios => {
      let carrerasConSecretario: string[] = secretarios.map(secretario => secretario.carrera.toString());
      this.carreraService.getCarreras().subscribe(carreras => {
        this.carrerasSinSecretario = carreras.filter(carrera => !carrerasConSecretario.includes(carrera.id.toString()));
        console.log(this.carrerasSinSecretario);
      });
    });
  }

  get nameField(){
    return this.form.get('name');
  }
  get emailField(){
    return this.form.get('email');
  }
  get carreraField(){
    return this.form.get('carrera');
  }

}
