import { Component, EventEmitter, OnInit, Output,  } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {Serie} from '../../models/serie';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  formulario: FormGroup;

  @Output() agregarSeries: EventEmitter<Serie> = new EventEmitter<Serie>();
   
  constructor(
    private form: FormBuilder
  ) { 
    this.formulario = form.group({
      nombre: new FormControl('', [Validators.required]),
      imagen:  new FormControl('', [Validators.required]),
      fecha:  new FormControl('', [Validators.required]),
      genero:  new FormControl('', [Validators.required,Validators.maxLength(15)]),
      temporadas: new FormControl('', [Validators.required]),
      episodios:  new FormControl('', [Validators.required]),
      rating:  new FormControl('', [Validators.required]),
      descripcion:  new FormControl('', [Validators.required, Validators.maxLength(200)]),
      
    })
  }

  ngOnInit(): void {
  }

  agregarSerie(){
      console.log(this.formulario.value);
      this.agregarSeries.emit(this.formulario.value);
  }

}
