import { Component, OnInit } from '@angular/core';
import { MateriaService } from 'src/app/servicios/materia.service';


@Component({
  selector: 'app-grilla',
  templateUrl: './grilla.component.html',
  styleUrls: ['./grilla.component.css']
})
export class GrillaComponent implements OnInit {

  title: string;
  materias: any[] = [];
  materiaFromParent;

  constructor(private materiaServ: MateriaService) {
    this.title = "Listado de Materias";
  }

  ngOnInit() {
    this.getMaterias();
  }

  getMaterias() {
    this.materiaServ.getAll().subscribe(materias => {
      console.info("RES", materias);
      this.materias = materias
    });
  }

  recargarDelPadre(materias) {
    this.materias = materias;
  }

  editar(materia){
    this.materiaFromParent = materia;
  }
}
