import { Pipe, PipeTransform } from '@angular/core';
import { CarreraService } from '@app/core/_services/carrera.service';

@Pipe({
  name: 'getNombreCarreraById'
})
export class GetNombreCarreraByIdPipe implements PipeTransform {

  constructor(
    private carreraService: CarreraService
  ){}

  transform(value: string): string {
    let nombreCarrera: string;
    this.carreraService.getCarrera(parseInt(value)).subscribe(carrera => {
      nombreCarrera = carrera.nombre;
    });
    return nombreCarrera;
  }

}
