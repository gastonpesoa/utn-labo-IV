import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/servicios/auth.service';
import { MateriaService } from 'src/app/servicios/materia.service';

@Component({
  selector: 'app-grilla-materias-insc',
  templateUrl: './grilla-materias-insc.component.html',
  styleUrls: ['./grilla-materias-insc.component.css']
})
export class GrillaMateriasInscComponent implements OnInit {

  user;
  title = "Materias inscriptas";
  materias: any[] = [];

  constructor(
    private authServ: AuthService,
    private materiasServ: MateriaService
  ) { }

  ngOnInit() {
    this.user = this.authServ.decodeToken();
    this.getMateriasUser();
  }

  getMateriasUser() {
    this.materiasServ.getMateriasUser(this.user.data.id).subscribe(res => {
      console.info("materias en grilla ", res);
      this.materias = res;
    });
  }

  recargarDelPadre(materias) {
    this.materias = materias;
  }

}
