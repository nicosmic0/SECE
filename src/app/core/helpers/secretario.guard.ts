import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AccountService } from '../services';

@Injectable({
  providedIn: 'root'
})
export class SecretarioGuard implements CanActivate {
  constructor(
    private router: Router,
    private accountService: AccountService
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const user = this.accountService.userValue;
    if (user && user.rol === 'secre') {
        // si es secretario return true
        return true;
    }

    // not logged in o no secre so redirect to login page with the return url
    this.router.navigate(['/account/login'], { queryParams: { returnUrl: state.url }});
    return false;
  }
  
}
