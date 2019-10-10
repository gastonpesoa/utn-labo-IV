import { Component, OnInit } from '@angular/core';
import { Pelicula } from 'src/app/clases/pelicula';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {

  title: string = "Búsqueda de películas";
  pelicula: Pelicula;
  alerta: boolean = false;
  constructor() { }

  ngOnInit() {
  }

  mostrarBusqueda(peli: Pelicula){
    this.alerta = false;
    if(peli != null){
      this.pelicula = peli;
    } else {
      this.alerta = true;
    }
  }

  limpiarBusqueda(){
    this.pelicula = null;
    this.alerta = false;
  }

}
