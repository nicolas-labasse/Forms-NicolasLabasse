import { Component, OnInit } from '@angular/core';
import { Serie } from './models/serie';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  _s: Serie[] = [
    {
      nombre: 'House of the Dragon',
      imagen: 'https://images.justwatch.com/poster/290440508/s718/temporada-1.%7Bformat%7D',
      descripcion: 'House of the Dragon es una serie de televisión de drama histórico y fantasía creada por Ryan Condal y Miguel Sapochnik, basada en la saga Canción de hielo y fuego de George R. R. Martin.',
      fecha: '2022',
      genero: 'Drama, Fantasía, Histórico',
      temporadas: 1,
      episodios: 10,
      rating: 8,
    },{
      nombre: 'The Witcher',
      imagen: 'https://img.ecartelera.com/noticias/fotos/70500/70567/4.jpg',
      descripcion: 'The Witcher es una serie de televisión de fantasía y drama creada por Lauren Schmidt Hissrich, basada en la saga de novelas de fantasía épica de Andrzej Sapkowski.',
      fecha: '2019',
      genero: 'Drama, Fantasía',
      temporadas: 2,
      episodios: 20,
      rating: 4,
    },{
      nombre: 'The Rings of Power',
      imagen: 'https://pbs.twimg.com/media/FKrj0aRVkAQjJvu?format=jpg&name=900x900',
      descripcion: 'The Lord of the Rings es una serie de televisión de fantasía y drama creada por J. D. Payne y Patrick McKay, basada en la saga de novelas de fantasía épica de J. R. R. Tolkien.',
      fecha: '2022',
      genero: 'Drama, Fantasía',
      temporadas: 1,
      episodios: 10,
      rating: 6,
    },{
      nombre: 'Peaky Blinders',
      imagen: 'https://images.justwatch.com/poster/300613012/s718/peaky-blinders.%7Bformat%7D',
      descripcion: 'Peaky Blinders es una serie de televisión de drama histórico y crimen creada por Steven Knight, basada en la familia real inglesa de los Peaky Blinders.',
      fecha: '2013',
      genero: 'Drama, Crimen, Histórico',
      temporadas: 6,
      episodios: 60,
      rating: 9,
      
    }
  ]; 

  constructor() {}


  ngOnInit(): void {

  }
 
  agregarSerie($event: Serie):void{
    this._s.push($event);
    console.log(this._s);
  }


}
