import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ENCUESTAS } from '../mocks/encuesta.mock';
import { PREGUNTAS } from '../mocks/pregunta.mock';
import { Encuesta } from '../_models/encuesta.model';

@Injectable({
  providedIn: 'root'
})
export class EncuestaService {

  encuestas: Encuesta[];

  constructor() {
    this.encuestas = ENCUESTAS;
  }

  getEncuestaBySecretario(idSecretario: number): Observable<Encuesta[]>{
    return of(this.encuestas.filter(encuesta => encuesta.usuarioCreador === idSecretario));
  }

  deleteEncuesta(id: number): Observable<Encuesta>{
    return of(this.encuestas.splice(id,1)[0]);
  }

  getPreguntasByIdEncuesta(idEncuesta: number){
    return of(PREGUNTAS.filter(pregunta => pregunta.encuesta === idEncuesta));
  }

}
