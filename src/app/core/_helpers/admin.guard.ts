import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { AccountService } from '../_services';

// Este guard revisa si el usuario inicia sesision y si es admin

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(
    private router: Router,
    private accountService: AccountService
) {}

canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
  const user = this.accountService.userValue;
  if (user && user.rol === 'admin') {
      // si es admin return true
      return true;
  }

  // not logged in o no admin so redirect to login page with the return url
  this.router.navigate(['/account/login'], { queryParams: { returnUrl: state.url }});
  return false;
}
  
}
