import { Component, OnInit } from '@angular/core';
import { VentaService } from 'src/app/servicios/venta.service';
import { Actor } from 'src/app/clases/actor';

@Component({
  selector: 'app-listado-ventas',
  templateUrl: './listado-ventas.component.html',
  styleUrls: ['./listado-ventas.component.css']
})
export class ListadoVentasComponent implements OnInit {

  title: string = "Listado de Actores"
  actores: Actor[] = [];

  constructor(private ventasServ: VentaService) { }

  ngOnInit() {
    this.getVentas();
  }

  getVentas() {
    this.ventasServ.getAll().subscribe(res => {
      console.info("actores: ", res);
      this.actores = res;
    })
  }

}
