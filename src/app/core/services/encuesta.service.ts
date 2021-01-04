import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ENCUESTAS } from '../mocks/encuesta.mock';
import { PREGUNTAS } from '../mocks/pregunta.mock';
import { Encuesta } from '../models/encuesta.model';

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

  getEncuestaByCarrera(idCarrera: number): Observable<Encuesta[]>{
    return of(this.encuestas.filter(encuesta => encuesta.carrera === idCarrera));
  }

  deleteEncuesta(id: number): Observable<Encuesta>{
    return of(this.encuestas.splice(id,1)[0]);
  }

  getPreguntasByIdEncuesta(idEncuesta: number){
    return of(PREGUNTAS.filter(pregunta => pregunta.encuesta === idEncuesta));
  }

}
