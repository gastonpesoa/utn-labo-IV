import { Injectable } from '@angular/core';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private data: DataService) { }

  login(nombre: string, pass: string) {
    return this.data.login('pedido/login', nombre, pass);
  }
}
