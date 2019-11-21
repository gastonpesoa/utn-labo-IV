import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isLoggedIn$: Observable<boolean>;
  usrName = '';
  pages: any[];

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.isLoggedIn$ = this.authService.isLoggedIn;
    this.isLoggedIn$.subscribe(res => {
      if (res) {
        this.setUsrName()
        this.getMenu()
      }
    });
  }

  getMenu() {

    const usrData = this.authService.decodeToken();
    this.pages = [];

    this.pages.push(
      {
        title: 'Home',
        url: ''
      }
    )

    switch (usrData.data.tipo) {

      case 'administrador':
        this.pages.push(
          {
            title: 'Alta de Materia',
            url: '/alta-materia'
          },
          {
            title: 'Usuarios',
            url: 'listado-usuarios'
          },
        )
        break;

      case 'alumno':
        this.pages.push(
          {
            title: 'Insripcion a Materias',
            url: 'inscripcion',
          }
        )
        break;

      case 'profesor':
          this.pages.push(
            {
              title: 'Materias a cargo',
              url: 'materias-a-cargo',
            }
          )
        break;
    }
  }

  logOut() {
    this.authService.logOut();
  }

  setUsrName() {
    const usrData = this.authService.decodeToken();
    this.usrName = usrData.data.email;
  }

}
