import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Ususario } from '../../clases/ususario';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  public usuario: Ususario;
  @Input() usuarioIngresado: Ususario;
  @Output() seCreo = new EventEmitter<any>();
  // public usuarios: Ususario[];

  constructor() {
    // this.usuarios = [
    //   new Ususario("juan", "juan123"), 
    //   new Ususario("marcos", "marcos123"),
    //   new Ususario("pedro", "pedro123")
    // ];
  }

  ngOnInit() {
  }

  add(nombre: string, clave: string): void {
    if (nombre && clave) {
      this.usuario = new Ususario();
      this.usuario.nombre = nombre.trim();
      this.usuario.clave = clave.trim()
      this.seCreo.emit(this.usuario);
      // this.usuarios.push(this.usuario);
    }
  }

  clear(){
    this.usuarioIngresado = new Ususario();
  }

}
