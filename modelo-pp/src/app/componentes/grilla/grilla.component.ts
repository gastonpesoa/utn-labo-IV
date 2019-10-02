import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../servicios/producto.service'
import { Producto } from 'src/app/clases/producto';


@Component({
  selector: 'app-grilla',
  templateUrl: './grilla.component.html',
  styleUrls: ['./grilla.component.css']
})
export class GrillaComponent implements OnInit {

  title: string;
  test: string
  productos: Producto[];

  constructor(private prodServ: ProductoService) {
    this.title = "Listado";
  }

  ngOnInit() {
    this.getProds();
  }

  getProds() {
    this.prodServ.getAll().subscribe(prods => this.productos = prods);
    // this.prodServ.getAll().subscribe(res => console.log(res));
  }

  refrescarGrilla(prods) {
    this.productos = prods;
  }

}
