import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GetNombreCarreraByIdPipe } from './get-nombre-carrera-by-id.pipe';
import { GetNumeroPreguntasPipe } from './get-numero-preguntas.pipe';

@NgModule({
  declarations: [GetNombreCarreraByIdPipe, GetNumeroPreguntasPipe],
  imports: [
    CommonModule
  ],
  exports: [
    GetNombreCarreraByIdPipe,
    GetNumeroPreguntasPipe
  ]
})
export class SharedModule { }
