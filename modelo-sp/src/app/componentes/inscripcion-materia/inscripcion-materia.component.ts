import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MateriaService } from 'src/app/servicios/materia.service';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-inscripcion-materia',
  templateUrl: './inscripcion-materia.component.html',
  styleUrls: ['./inscripcion-materia.component.css']
})
export class InscripcionMateriaComponent implements OnInit {

  color = 'yellow';
  user: any;
  title = "Inscripción a Materias"
  materias: any[] = [];
  materiaId = -1;
  valid: boolean = false;
  @Output() recargarDelHijo = new EventEmitter<any>();

  constructor(
    private authServ: AuthService,
    private materiasServ: MateriaService,
    private toast: ToastrService) { }

  ngOnInit() {
    this.user = this.authServ.decodeToken();
    this.getAllMaterias();
  }

  getAllMaterias() {
    this.materiasServ.getAllConCupo(this.user.data.id).subscribe(materias => {
      console.info("MATERIAS", materias);
      this.materias = materias;
    });
  }

  inscribir(id) {

    console.info("inscripcion - id alumno", this.user.data.id, "materia id", id);

    this.materiasServ.inscribir(this.user.data.id, id).subscribe(res => {
      console.info("res inscripcion", res);
      if (res.Estado === "OK") {
        this.getAllMaterias();
        this.toast.success(res.Mensaje);
        this.materiasServ.getMateriasUser(this.user.data.id).subscribe(res => {
          console.info("materias a las que estas inscriptas", res);
          this.recargarDelHijo.emit(res)
        })
      } else {
        this.toast.error("Error al inscribir");
      }
    })
  }

}
