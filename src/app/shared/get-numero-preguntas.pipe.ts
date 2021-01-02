import { Pipe, PipeTransform } from '@angular/core';
import { EncuestaService } from '@app/core/services/encuesta.service';

@Pipe({
  name: 'getNumeroPreguntas'
})
export class GetNumeroPreguntasPipe implements PipeTransform {

  constructor(
    private encuestaService: EncuestaService
  ){}

  transform(value: number): number {
    let numeroPreguntas: number;
    this.encuestaService.getPreguntasByIdEncuesta(value).subscribe(preguntas => numeroPreguntas = preguntas.length);
    return numeroPreguntas;
  }

}
