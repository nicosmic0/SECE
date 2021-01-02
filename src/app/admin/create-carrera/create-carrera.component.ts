import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MyValidators } from '@app/utils/validators';
import { CarreraService } from '@app/core/services/carrera.service';


@Component({
  selector: 'app-create-carrera',
  templateUrl: './create-carrera.component.html',
  styleUrls: ['./create-carrera.component.scss']
})
export class CreateCarreraComponent implements OnInit {

  form!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private carreraService: CarreraService
  ) {
    this.buildForm();
  }

  ngOnInit(): void {
  }

  private buildForm(){
    this.form = this.formBuilder.group({
      id: [, [Validators.required], MyValidators.isIdCarreraAvilable(this.carreraService)],  // Agregar validador para que no se repita el id
      nombre: ['', [Validators.required]]
    });
  }

  saveCarrera(evento: Event){
    evento.preventDefault();
    if(this.form.valid){
      this.carreraService.createCarrera(this.form.value).subscribe(resp => {
        console.log(this.form.value);
      })
    }
  }

  get idField(){
    return this.form.get('id');
  }
  
  get nombreField(){
    return this.form.get('nombre');
  }
}
