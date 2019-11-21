import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/servicios/usuario.service';


@Component({
  selector: 'app-listado-usuarios',
  templateUrl: './listado-usuarios.component.html',
  styleUrls: ['./listado-usuarios.component.css']
})
export class ListadoUsuariosComponent implements OnInit {

  title: string = "Listado de Usuarios"
  usuarios: [] = [];
  filtroTodos = true;
  filtroAdmin = false;
  filtroAlumnos = false;
  filtroProfes = false;

  constructor(private usuariosServ: UsuarioService) { }

  ngOnInit() {
    this.getusuarios();
  }

  getusuarios() {
    this.usuariosServ.getAll().subscribe(res => {
      console.info("usuarios: ", res);
      this.usuarios = res;
    })
  }

  onRadioChange(valor) {
    console.log(valor);
    switch (valor) {
      case 0:
        this.filtroTodos = true;
        this.filtroAdmin = false;
        this.filtroAlumnos = false;
        this.filtroProfes = false;
        break;
      case 1:
          this.filtroTodos = false;
          this.filtroAdmin = true;
          this.filtroAlumnos = false;
          this.filtroProfes = false;
        break;
      case 2:
          this.filtroTodos = false;
          this.filtroAdmin = false;
          this.filtroAlumnos = true;
          this.filtroProfes = false;
        break;
      case 3:
          this.filtroTodos = false;
          this.filtroAdmin = false;
          this.filtroAlumnos = false;
          this.filtroProfes = true;
        break;
    }
  }

}
