import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Pelicula } from 'src/app/clases/pelicula';
import { ProductoService } from 'src/app/servicios/producto.service';


@Component({
  selector: 'app-boton',
  templateUrl: './boton.component.html',
  styleUrls: ['./boton.component.css']
})
export class BotonComponent implements OnInit {

  @Input() btnProd: Pelicula;
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
