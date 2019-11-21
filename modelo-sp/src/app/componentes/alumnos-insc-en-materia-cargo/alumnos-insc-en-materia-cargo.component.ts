import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alumnos-insc-en-materia-cargo',
  templateUrl: './alumnos-insc-en-materia-cargo.component.html',
  styleUrls: ['./alumnos-insc-en-materia-cargo.component.css']
})
export class AlumnosInscEnMateriaCargoComponent implements OnInit {

  title = "Listado de alumnos inscriptos"
  alumnos: any[] = [];
  constructor() { }

  ngOnInit() {
  }

  recargarDelPadre(alumnos) {
    if (alumnos == null) {

      this.alumnos = [];
    } else {

      this.alumnos = alumnos;
    }
  }

}
