import { Component, OnInit } from '@angular/core';
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
  idUsuario!: number;
  busqueda!: string;

  constructor(
    private encuestaService: EncuestaService,
    private accountService: AccountService
  ) {}

  ngOnInit(): void {
    // obtiene el id del secretario que está logeado
    this.idUsuario = parseInt(this.accountService.userValue.id);
    this.getEncuestas();
  }

  getEncuestas(){
    this.encuestaService.getEncuestaBySecretario(this.idUsuario).subscribe(encuestas => {
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
