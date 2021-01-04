import { Component, OnInit } from '@angular/core';
import { User } from '@app/core/models';
import { Encuesta } from '@app/core/models/encuesta.model';
import { AccountService } from '@app/core/services';
import { EncuestaService } from '@app/core/services/encuesta.service';

@Component({
  selector: 'app-crud-encuesta',
  templateUrl: './crud-encuesta.component.html',
  styleUrls: ['./crud-encuesta.component.less']
})
export class CrudEncuestaComponent implements OnInit {

  encuestas!: Encuesta[];
  carreraUsuario!: string;
  busqueda!: string;

  constructor(
    private encuestaService: EncuestaService,
    private accountService: AccountService
  ) {}

  ngOnInit(): void {
    // obtiene el id del secretario que está logeado
    this.carreraUsuario = this.accountService.userValue.carrera.toString();
    this.getEncuestas();
  }

  getEncuestas(){
    this.encuestaService.getEncuestaByCarrera(parseInt(this.carreraUsuario)).subscribe(encuestas => {
      console.log(encuestas);
      this.encuestas = encuestas;
    });
  }

  search(){
    if(this.busqueda.length > 0){
      this.encuestas = this.encuestas.filter(encuesta => encuesta.nombre.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").includes(this.busqueda));
    }else{
      this.getEncuestas();
    }
  }

}
