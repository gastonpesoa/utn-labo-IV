import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { Producto } from '../clases/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(private data: DataService) { }

  getTest() {
    return this.data.getTest('pedido/listarPedidosPorMesa/mes02');
  }

  getAll() {
    return this.data.getAll('pedido/listarTodos');
  }

  delete(id: number) {
    return this.data.delete('pedido/borrar/' + id);
  }

  buscar(desc: string) {
    return this.data.buscar('pedido/buscar/' + desc);
  }

  alta(prod: Producto) {
    return this.data.alta('pedido/new', prod);
  }

}
