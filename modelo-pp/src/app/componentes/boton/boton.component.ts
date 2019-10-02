import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Producto } from 'src/app/clases/producto';
import { ProductoService } from 'src/app/servicios/producto.service';


@Component({
  selector: 'app-boton',
  templateUrl: './boton.component.html',
  styleUrls: ['./boton.component.css']
})
export class BotonComponent implements OnInit {

  @Input() btnProd: Producto;
  @Output() recargarGrilla = new EventEmitter<string>();

  constructor(private prodServ: ProductoService) { }

  delete() {
    console.log(this.btnProd);
    if(confirm("Confirma que desea eliminar el producto?")){
      this.prodServ.delete(this.btnProd.id).subscribe(res => {
        console.log(res);
        this.prodServ.getAll().subscribe(res => {
          this.recargarGrilla.emit(res);
        });
      });
    }
  }


  ngOnInit() {
  }

}
