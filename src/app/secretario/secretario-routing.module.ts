import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrudEncuestaComponent } from './crud-encuesta/crud-encuesta.component';
import { SecretarioLayoutComponent } from './secretario-layout/secretario-layout.component';

const routes: Routes = [
  {
    path: '',
    component: SecretarioLayoutComponent,
    children: [
      {path:'', component: CrudEncuestaComponent},
      {path:'encuestas', component: CrudEncuestaComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecretarioRoutingModule { }
