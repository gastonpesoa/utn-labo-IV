import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../clases/usuario';
import { UsuarioService } from '../../servicios/usuario.service';
import { Router } from '@angular/router'

import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  // animations: [
  //   trigger('test', [
  //     state('open', style({
  //       height: '200px',
  //       opacity: 1,
  //       backgroundColor: 'yellow'
  //     })),
  //     state('closed', style({
  //       height: '100px',
  //       opacity: 0.5,
  //       backgroundColor: 'green'
  //     })),
  //     transition('open => closed', [
  //       animate('1s')
  //     ]),
  //     transition('closed => open', [
  //       animate('0.5s')
  //     ]),
  //   ])
  // ]
})
export class LoginComponent implements OnInit {

  public usuario: Usuario;
  public ingresado: Boolean;

  isOpen = true;

  constructor(private userService: UsuarioService, private router: Router) {
    this.usuario = new Usuario();
    this.usuario.username = "admin";
    this.usuario.password = "123456";
    this.ingresado = false;
  }

  ngOnInit() {
  }

  Ingresar() {

    // this.isOpen = !this.isOpen;

    this.userService.login(this.usuario.username, this.usuario.password)
      .subscribe(res=>console.info("res: ", res));

    // this.userService.getUsers().subscribe(res => console.info("res: ", res));

    // this.userService.getTest().subscribe(res=>console.info("res: ", res));
    // console.info("usuario: ", this.usuario);
    // this.ingresado = true;


    // this.router.navigate(['/inicio']);
  }

}
