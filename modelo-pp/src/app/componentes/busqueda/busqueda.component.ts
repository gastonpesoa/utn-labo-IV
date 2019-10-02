import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ProductoService } from 'src/app/servicios/producto.service';
import { Producto } from 'src/app/clases/producto';
import { map } from 'rxjs/operators'
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {

  descripcion: string;
  producto: Producto;
  waiting: boolean = false;

  @Output() productoEncontrado = new EventEmitter<string>();

  constructor(
    private prodServ: ProductoService,
    private toastr: ToastrService) { }

  ngOnInit() {
  }

  buscar() {
    if (this.descripcion) {
      this.waiting = true;
      this.prodServ.buscar(this.descripcion).subscribe(res => {
        this.waiting = false;
          this.productoEncontrado.emit(res);
          console.log(res);
          this.descripcion = "";
      });
    } else {
      this.toastr.warning("Por favor ingrese una descripción");
    }
  }

}
