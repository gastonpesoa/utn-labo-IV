import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/clases/producto';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {

  title: string = "Búsqueda de productos";
  producto: Producto;
  alerta: boolean = false;
  constructor() { }

  ngOnInit() {
  }

  mostrarBusqueda(prod: Producto){
    this.alerta = false;
    if(prod != null){
      this.producto = prod;
    } else {
      this.alerta = true;
    }
  }

  limpiarBusqueda(){
    this.producto = null;
    this.alerta = false;
  }

}
