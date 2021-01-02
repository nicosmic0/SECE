import { Component } from '@angular/core';

import { User } from '@app/core/models';
import { AccountService } from '@app/core/services';

@Component({ templateUrl: 'home.component.html' })
export class HomeComponent {
    user: User;

    constructor(private accountService: AccountService) {
        this.user = this.accountService.userValue;
        this.accountService.user.subscribe(x => this.user = x);
    }

    logout() {
        this.accountService.logout();
    }
}