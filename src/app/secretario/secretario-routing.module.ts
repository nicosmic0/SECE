import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateEncuestaComponent } from './create-encuesta/create-encuesta.component';
import { CrudEncuestaComponent } from './crud-encuesta/crud-encuesta.component';
import { SecretarioLayoutComponent } from './secretario-layout/secretario-layout.component';

const routes: Routes = [
  {
    path: '',
    component: SecretarioLayoutComponent,
    children: [
      {path:'', component: CrudEncuestaComponent},
      {path:'encuestas', component: CrudEncuestaComponent},
      {path:'encuestas/crear', component: CreateEncuestaComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecretarioRoutingModule { }
