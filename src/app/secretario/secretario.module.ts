import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecretarioRoutingModule } from './secretario-routing.module';
import { MaterialModule } from '@app/material/material.module';
import { SharedModule } from '@app/shared/shared.module';
import { SecretarioLayoutComponent } from './secretario-layout/secretario-layout.component';
import { LayoutModule } from '@angular/cdk/layout';
import { CrudEncuestaComponent } from './crud-encuesta/crud-encuesta.component';
import { CreateEncuestaComponent } from './create-encuesta/create-encuesta.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
  SecretarioLayoutComponent,
  CrudEncuestaComponent,
  CreateEncuestaComponent
],
  imports: [
    CommonModule,
    SecretarioRoutingModule,
    MaterialModule,
    SharedModule,
    LayoutModule,
    FormsModule
  ]
})
export class SecretarioModule { }
