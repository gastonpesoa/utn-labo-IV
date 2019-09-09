import { Component, OnInit } from '@angular/core';
import { Ususario } from '../../clases/ususario';

@Component({
  selector: 'app-usuario-listado',
  templateUrl: './usuario-listado.component.html',
  styleUrls: ['./usuario-listado.component.css']
})
export class UsuarioListadoComponent implements OnInit {

  usuarios: Array<Ususario> = [];
  usuarioEdit: Ususario = new Ususario();

  constructor() { }

  ngOnInit() {
  }

  agregar(usuario: Ususario){
    this.usuarios.push(usuario);
  }

  editar(usuario: Ususario){
    this.usuarioEdit = usuario;
  }
}
