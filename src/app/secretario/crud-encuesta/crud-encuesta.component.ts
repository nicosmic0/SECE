import { Component, OnInit } from '@angular/core';
import { Encuesta } from '@app/core/_models/encuesta.model';
import { AccountService } from '@app/core/_services';
import { EncuestaService } from '@app/core/_services/encuesta.service';

@Component({
  selector: 'app-crud-encuesta',
  templateUrl: './crud-encuesta.component.html',
  styleUrls: ['./crud-encuesta.component.less']
})
export class CrudEncuestaComponent implements OnInit {

  encuestas!: Encuesta[];
  idUsuario!: number;

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

  // deleteEncuesta(id: number){
  //   this.encuestaService.deleteEncuesta(id).subscribe(resp => console.log(`Encuesta id:${id} eliminda`));
  // }

}
