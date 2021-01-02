import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AccountService } from '../services';

@Injectable({
  providedIn: 'root'
})
export class EstudianteGuard implements CanActivate {
  constructor(
    private router: Router,
    private accountService: AccountService
) {}

canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
  const user = this.accountService.userValue;
  if (user && user.rol === 'estu') {
      // si es estudiante return true
      return true;
  }
  if (user && user.rol === 'admin') {
    this.router.navigate(['/admin']);
    return false;
  }
  if (user && user.rol === 'secre') {
    this.router.navigate(['/secretario']);
    return false;
  }

  // not logged in o no estudiante so redirect to login page with the return url
  this.router.navigate(['/account/login'], { queryParams: { returnUrl: state.url }});
  return false;
}
  
}
