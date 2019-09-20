import { Component, OnInit } from '@angular/core';
import { Ususario } from '../../clases/ususario';
import { UserService } from 'src/app/servicios/user.service';
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

  public usuario: Ususario;
  public ingresado: Boolean;

  isOpen = true;

  constructor(private userService: UserService, private router: Router) {
    this.usuario = new Ususario();
    this.usuario.username = "admin";
    this.usuario.password = "admin";
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
