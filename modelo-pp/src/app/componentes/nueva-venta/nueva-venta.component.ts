import { Component, OnInit } from '@angular/core';
import { ProductoService } from 'src/app/servicios/producto.service';
import { VentaService } from 'src/app/servicios/venta.service';
import { Producto } from 'src/app/clases/producto';
import { Venta } from 'src/app/clases/venta';
import { FormGroup, FormControl } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-nueva-venta',
  templateUrl: './nueva-venta.component.html',
  styleUrls: ['./nueva-venta.component.css']
})
export class NuevaVentaComponent implements OnInit {

  title: string = "Registro de Venta";
  productos: Producto[] = [];

  ventaForm = new FormGroup({
    producto: new FormControl(''),
    fechaVenta: new FormControl(''),
    cantidad: new FormControl('')
  });

  constructor(
    private prodServ: ProductoService, 
    private ventaServ: VentaService,
    private toastr: ToastrService
    ) { }

  ngOnInit() {
    this.getAllProductos();
  }

  getAllProductos(){
    this.prodServ.getAll().subscribe(res => this.productos = res);
  }

  altaVenta(){
    console.warn(this.ventaForm.value);
    const venta = new Venta();
    venta.id = this.ventaForm.value.producto;
    venta.cantidad = this.ventaForm.value.cantidad;
    venta.fechaVenta = this.ventaForm.value.fechaVenta;
    console.info("venta", venta);
    this.ventaServ.alta(venta).subscribe(res => {
      this.toastr.success("Alta realizada!");
      console.info("res", res);
    });
  }

}
