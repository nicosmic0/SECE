import { Injectable } from '@angular/core';

import { Carrera } from '../_models/carrera.model';


import { CARRERAS } from '../mocks/carrera.mock'; 
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarreraService {

  _CARRERAS: Carrera[];

  constructor() {
    this._CARRERAS = CARRERAS;
  }

  getCarreras(): Observable<Carrera[]>{
    return of(this._CARRERAS);
  }

  getCarrera(id: number): Observable<Carrera>{
    return of(this._CARRERAS.find(carrera => carrera.id === id));
  }

  createCarrera(carrera: Carrera): Observable<any>{
    return of(this._CARRERAS.push(carrera));
  }

  deleteCarrera(id: number): Observable<Carrera>{
    const index = this._CARRERAS.findIndex(carrera => carrera.id === id);
    return of(this._CARRERAS.splice(index,1)[0]);
  }

  // updateCarrera(id: number, changes: Partial<Carrera>): Observable<Carrera>{
  //   this._CARRERAS[id] = { ...this._CARRERAS[id], ...changes};
  //   return of(this._CARRERAS[id]);
  // }

  checkId(id: number){
    return of({ isIdAvailable: !this._CARRERAS.map(carrera => carrera.id).includes(id) })
  }
}
