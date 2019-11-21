import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from 'src/app/servicios/auth.service';
import { MateriaService } from 'src/app/servicios/materia.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-lista-materias-cargo',
  templateUrl: './lista-materias-cargo.component.html',
  styleUrls: ['./lista-materias-cargo.component.css']
})
export class ListaMateriasCargoComponent implements OnInit {

  @Output() recargarDelHijo = new EventEmitter<any>();
  user;
  materias: any[] = [];
  title = "Materias a Cargo"
  constructor(
    private toast: ToastrService,
    private authServ: AuthService,
    private materiasServ: MateriaService) { }

  ngOnInit() {
    this.user = this.authServ.decodeToken();
    this.getMateriasProfe();
  }

  getMateriasProfe() {
    this.materiasServ.getMateriasProfe(this.user.data.nombre).subscribe(res => {
      console.info("materias en grilla ", res);
      this.materias = res;
    });
  }

  verAlumnos(materiaId) {
    this.materiasServ.getAlumnosMateria(materiaId).subscribe(res => {
      console.info("alumnos materias", res);
      if (res.length < 1) {
        this.toast.error("No hay alumnos registrados en esta materia")
        this.recargarDelHijo.emit(null);
      } else {
        this.recargarDelHijo.emit(res);
      }
    })
  }

}
