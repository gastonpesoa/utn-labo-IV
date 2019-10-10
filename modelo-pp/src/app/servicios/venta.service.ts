import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { Actor } from '../clases/actor';

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

  alta(venta: Actor) {
    return this.data.alta('pedido/newVenta', venta);
  }
}
