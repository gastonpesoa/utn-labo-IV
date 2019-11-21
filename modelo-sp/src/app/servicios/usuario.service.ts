import { Injectable } from '@angular/core';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private data: DataService) { }

  login(email: string, pass: string) {
    return this.data.login('login', email, pass);
  }

  alta(usuario){
    return this.data.post('usuario/new', usuario);
  }

  getAll(){
    return this.data.getAll('usuario/');
  }
}
