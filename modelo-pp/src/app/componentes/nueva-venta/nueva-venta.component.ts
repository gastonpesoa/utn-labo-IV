import { Component, OnInit } from '@angular/core';
import { ProductoService } from 'src/app/servicios/producto.service';
import { VentaService } from 'src/app/servicios/venta.service';
import { Pelicula } from 'src/app/clases/pelicula';
import { Actor } from 'src/app/clases/actor';
import { FormGroup, FormControl } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-nueva-venta',
  templateUrl: './nueva-venta.component.html',
  styleUrls: ['./nueva-venta.component.css']
})
export class NuevaVentaComponent implements OnInit {

  title: string = "Registro de Actores";

  actorForm = new FormGroup({
    nombre: new FormControl(''),
    apellido: new FormControl(''),
    nacionalidad: new FormControl(''),
    fechaNac: new FormControl(''),
  });

  constructor(
    private prodServ: ProductoService, 
    private ventaServ: VentaService,
    private toastr: ToastrService
    ) { }

  ngOnInit() {
    
  }

  altaActor(){
    console.warn(this.actorForm.value);
    const actor = new Actor();
    actor.nombre = this.actorForm.value.nombre;
    actor.apellido = this.actorForm.value.apellido;
    actor.nacionalidad = this.actorForm.value.nacionalidad;
    actor.fechaNac = this.actorForm.value.fechaNac;
    console.info("actor", actor);
    this.ventaServ.alta(actor).subscribe(res => {
      this.toastr.success("Alta realizada!");
      console.info("res", res);
    });
  }

}
