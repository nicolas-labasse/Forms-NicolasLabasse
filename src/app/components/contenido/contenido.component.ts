import { Component, Input, OnInit } from '@angular/core';
import { Serie } from 'src/app/models/serie';
import { FormularioComponent } from '../formulario/formulario.component';


@Component({
  selector: 'app-contenido',
  templateUrl: './contenido.component.html',
  styleUrls: ['./contenido.component.css']
})
export class ContenidoComponent implements OnInit {

  @Input() _s: Serie[] = [
  ];
  
 
  constructor() {
  }

  ngOnInit(): void {
  }

}
