import { Component, OnInit } from '@angular/core';
import { Ususario } from '../../clases/ususario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public usuario: Ususario;
  public ingresado: Boolean;

  constructor() { 
    this.usuario = new Ususario();
    this.usuario.nombre = "Pepe";
    this.usuario.clave = "Secreto";
    this.ingresado = false;
  }

  ngOnInit() {
  }

  Ingresar(){
    console.info("usuario: ", this.usuario);
    this.ingresado = true;
  }

}
