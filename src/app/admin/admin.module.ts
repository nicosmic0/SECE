import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { LayoutModule } from '@angular/cdk/layout';

import { CreateCarreraComponent } from './create-carrera/create-carrera.component';
import { CrudCarreraComponent } from './crud-carrera/crud-carrera.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@app/material/material.module';
import { CrudSecretarioComponent } from './crud-secretario/crud-secretario.component';
import { CreateSecretarioComponent } from './create-secretario/create-secretario.component';
import { SharedModule } from '@app/shared/shared.module';


@NgModule({
  declarations: [
    AdminLayoutComponent,
    CrudCarreraComponent,
    CreateCarreraComponent,
    CrudSecretarioComponent,
    CreateSecretarioComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    LayoutModule,
    ReactiveFormsModule,
    MaterialModule,
    SharedModule
  ]
})
export class AdminModule { }
