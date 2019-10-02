import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { Venta } from '../clases/venta';

@Injectable({
  providedIn: 'root'
})
export class VentaService {

  constructor(private data: DataService) { }

  getAll() {
    return this.data.getAll('pedido/listarTodosVenta');
  }

  delete(id: number) {
    return this.data.delete('pedido/borrarVenta/' + id);
  }

  buscar(desc: string) {
    return this.data.buscar('pedido/buscarVenta/' + desc);
  }

  alta(prod: Venta) {
    return this.data.alta('pedido/newVenta', prod);
  }
}
