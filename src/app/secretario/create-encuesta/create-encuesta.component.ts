import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '@app/core/models';
import { Pregunta } from '@app/core/models/pregunta.model';
import { AccountService } from '@app/core/services';

@Component({
  selector: 'app-create-encuesta',
  templateUrl: './create-encuesta.component.html',
  styleUrls: ['./create-encuesta.component.less']
})
export class CreateEncuestaComponent implements OnInit {

  encuestaForm!: FormGroup;
  preguntaForm!: FormGroup;

  preguntas!: Pregunta[];

  user: User;

  constructor(
    private formBuilder: FormBuilder,
    private accountService: AccountService
  ) { }

  ngOnInit(): void {
    this.user = this.accountService.userValue;
    this.buildEncuestaForm();
  }

  buildEncuestaForm(){
    this.encuestaForm = this.formBuilder.group({
      // id: se asigna en el servicio
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required],
      anonima: [, Validators.required],
      fechaInicio: [, Validators.required],
      fechaTermino: [, Validators.required],
      usuarioCreador: [this.user.id, Validators.required],  // sin input
      carrera: [this.user.carrera, Validators.required],  // sin input
      habilitada: [true, Validators.required],  // sin input
      activa: [true, Validators.required],  // sin input
    });
  }

  // buildPreguntaForm(){
  //   this.preguntaForm = this.formBuilder.group({
  //     // id: se asigna en el servicio
  //     encuesta: [, Validators.required],  // sin input
  //     titulo: ['', Validators.required],
  //     tipo_pregunta: [, Validators.required],
  //     data: [, Validators.required]
  //   });
  // }


  



  get nombreField(){
    return this.encuestaForm.controls.nombre
  }
  get descripcionField(){
    return this.encuestaForm.controls.descripcion
  }
  get anonimaField(){
    return this.encuestaForm.controls.anonima
  }
  get fechaInicioField(){
    return this.encuestaForm.controls.fechaInicio
  }
  get fechaTerminoField(){
    return this.encuestaForm.controls.fechaTermino
  }
}
