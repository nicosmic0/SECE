import { Component, OnInit } from '@angular/core';
import { Carrera } from 'src/app/core/_models/carrera.model';
import { CarreraService } from 'src/app/core/_services/carrera.service';

import { MatDialog } from '@angular/material/dialog';
import { CreateCarreraComponent } from '../create-carrera/create-carrera.component';


@Component({
  selector: 'app-crud-carrera',
  templateUrl: './crud-carrera.component.html',
  styleUrls: ['./crud-carrera.component.scss']
})
export class CrudCarreraComponent implements OnInit {

  carreras!: Carrera[];

  constructor(
    private carreraServices: CarreraService,
    private dialog: MatDialog
  ) {
  }

  ngOnInit(): void {
    this.getCarreras();
  }

  getCarreras(){
    this.carreraServices.getCarreras().subscribe(carreras => {
      this.carreras = carreras;
    });
  }

  deleteCarrera(index: number){
    this.carreraServices.deleteCarrera(index).subscribe(carrera => console.log(`Carrera ${index} eliminada!`));
  }

  openCreateCarreraDialog(){
    const dialogRef = this.dialog.open(CreateCarreraComponent);
    dialogRef.afterClosed().subscribe(result => console.log(`Dialog result: ${result}`));
  }


}
