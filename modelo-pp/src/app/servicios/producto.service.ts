import { Injectable } from '@angular/core';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(private data: DataService) { }

  getTest(){
    return this.data.getTest('pedido/listarPedidosPorMesa/mes02');
  
  }
  getAll(){
    return this.data.getAll('pedido/listarTodos');
  }

  delete(id: number){
    return this.data.delete('pedido/borrar/' + id);
  }
}
