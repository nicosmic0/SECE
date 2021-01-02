import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { CrudCarreraComponent } from './crud-carrera/crud-carrera.component';
import { CrudSecretarioComponent } from './crud-secretario/crud-secretario.component';

const routes: Routes = [
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
      {path: '', component: CrudCarreraComponent},
      {path: 'carreras', component: CrudCarreraComponent},
      {path: 'secretarios', component: CrudSecretarioComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
