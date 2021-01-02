import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { AuthGuard } from './core/helpers';
import { AdminGuard } from './core/helpers/admin.guard';
import { SecretarioGuard } from './core/helpers/secretario.guard';
import { EstudianteGuard } from './core/helpers/estudiante.guard';

const accountModule = () => import('./account/account.module').then(x => x.AccountModule);
const usersModule = () => import('./users/users.module').then(x => x.UsersModule);
const adminModule = () => import('./admin/admin.module').then(x => x.AdminModule);
const secretarioModule = () => import('./secretario/secretario.module').then(x => x.SecretarioModule);

const routes: Routes = [
    { path: '', component: HomeComponent, canActivate: [EstudianteGuard] },
    { path: 'users', loadChildren: usersModule, canActivate: [AdminGuard] },
    { path: 'account', loadChildren: accountModule },
    { path: 'admin', loadChildren: adminModule, canActivate: [AdminGuard] },
    { path: 'secretario', loadChildren: secretarioModule, canActivate: [SecretarioGuard] },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
    exports: [RouterModule]
})
export class AppRoutingModule { }