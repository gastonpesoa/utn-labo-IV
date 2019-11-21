import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/servicios/usuario.service';
import { ToastrService } from 'ngx-toastr';
import { SpinnerService } from 'src/app/servicios/spinner.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { MateriaService } from 'src/app/servicios/materia.service';
import { Materia } from '../../clases/materia';


@Component({
  selector: 'app-alta-materia',
  templateUrl: './alta-materia.component.html',
  styleUrls: ['./alta-materia.component.css']
})
export class AltaMateriaComponent implements OnInit {

  title: string = "Alta de Materia";
  profesores: any[] = [];
  altaMateriaValid: boolean = false;
  @Input() materiaFromChild: Materia;
  @Output() recargarDelHijo = new EventEmitter<string>();

  constructor(
    private userServ: UsuarioService,
    private materiaServ: MateriaService,
    private toastr: ToastrService,
    public spinner: SpinnerService,
    public jwtHelper: JwtHelperService) { }

  ngOnInit() {
    this.getAllProfesores();
    this.materiaFromChild = new Materia('', '', 0, '');
    console.info("materiaaaa", this.materiaFromChild)
  }

  getAllProfesores() {
    this.userServ.getAll().subscribe(res => {
      // console.info("RES", res);
      this.profesores = res.filter(element => {
        return element.tipo === "profesor";
      })
    })
  }

  limpiar() {
    this.materiaFromChild = new Materia('', '', 0, '');
  }

  altaMateria() {

    if (this.materiaFromChild.nombre != '' && this.materiaFromChild.cuatrimestre != '' &&
      this.materiaFromChild.cupos > 0 && this.materiaFromChild.profesor != '') {
      this.altaMateriaValid = true;
    }

    if (!this.altaMateriaValid) {
      this.toastr.error("Complete todos los campos")
      return;
    }
    else {
      this.spinner.showLoadingSpinner();
      if (this.materiaFromChild.id) {
        console.info("materiaFromChild edit", this.materiaFromChild);
        const materia = {
          id: this.materiaFromChild.id,
          nombre: this.materiaFromChild.nombre,
          cuatrimestre: this.materiaFromChild.cuatrimestre,
          cupos: this.materiaFromChild.cupos,
          profesor: this.materiaFromChild.profesor,
        }
        this.materiaServ.update(materia).subscribe(
          (res) => {
            console.info("res", res);
            this.spinner.hideLoadingSpinner();
            if (res.Estado === 'OK') {
              this.toastr.success("Materia modificada");
              this.materiaServ.getAll().subscribe(res => {
                this.recargarDelHijo.emit(res);
              })
            } else {
              this.toastr.error(res.Mensaje);
            }
          },
          (error) => {
            console.error(error);
            this.spinner.hideLoadingSpinner();
            this.toastr.error(`Error ${error} al modificar`);
          });
      }
      else {

        console.info("materiaFromChild alta", this.materiaFromChild);
        const materia = {
          nombre: this.materiaFromChild.nombre,
          cuatrimestre: this.materiaFromChild.cuatrimestre,
          cupos: this.materiaFromChild.cupos,
          profesor: this.materiaFromChild.profesor,
        }
        this.materiaServ.alta(materia).subscribe(
          (res) => {
            console.info("res", res);
            this.spinner.hideLoadingSpinner();
            if (res.Estado === 'OK') {
              this.toastr.success("Materia registrada");
              this.materiaServ.getAll().subscribe(res => {
                this.recargarDelHijo.emit(res);
              })
            } else {
              this.toastr.error(res.Mensaje);
            }
          },
          (error) => {
            console.error(error);
            this.spinner.hideLoadingSpinner();
            this.toastr.error(`Error ${error} al registrar`);
          });
      }
    }


  }
}
