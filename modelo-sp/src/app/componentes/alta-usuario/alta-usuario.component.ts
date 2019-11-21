import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsuarioService } from 'src/app/servicios/usuario.service';
import { ToastrService } from 'ngx-toastr';
import { UploadService } from 'src/app/servicios/upload.service';
import { SpinnerService } from 'src/app/servicios/spinner.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';


@Component({
  selector: 'app-alta-usuario',
  templateUrl: './alta-usuario.component.html',
  styleUrls: ['./alta-usuario.component.css']
})
export class AltaUsuarioComponent implements OnInit {

  title: string = "Alta de Usuario";
  perfiles = ["alumno", "profesor", "administrador"];
  selectedFile: File = null;

  altaUsuarioForm = new FormGroup({
    nombre: new FormControl('', Validators.required),
    username: new FormControl('', Validators.required),
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    password: new FormControl('', Validators.required),
    tipo: new FormControl('', Validators.required),
    genero: new FormControl('', Validators.required),
    foto: new FormControl('')
  });

  constructor(
    public router: Router,
    private userServ: UsuarioService,
    private toastr: ToastrService,
    private uploadServ: UploadService,
    public spinner: SpinnerService,
    public jwtHelper: JwtHelperService) { }

  ngOnInit() {
  }

  altaUsuario() {

    this.spinner.showLoadingSpinner();
    console.warn(this.altaUsuarioForm.value);

    const formData = new FormData();
    if (this.selectedFile != null) {
      formData.append('imagen', this.selectedFile, this.selectedFile.name);
    }

    const user = {
      nombre: this.altaUsuarioForm.value.nombre,
      username: this.altaUsuarioForm.value.username,
      email: this.altaUsuarioForm.value.email,
      password: this.altaUsuarioForm.value.password,
      tipo: this.altaUsuarioForm.value.tipo,
      genero: this.altaUsuarioForm.value.genero
    }

    this.userServ.alta(user).subscribe(
      (res) => {
        console.info("res", res);
        localStorage.setItem("token", res.Token);

        if (this.selectedFile != null) {
          var payload = this.jwtHelper.decodeToken(res.Token);
          var userId = payload.data.id;
          formData.append('id', userId);

          this.uploadServ.upload(formData).subscribe(
            (res) => {
              console.info("res", res);
              this.spinner.hideLoadingSpinner()
              this.router.navigate(['']);
              this.toastr.success("Alta realizada");
            },
            (error) => {
              console.error(error);
              this.spinner.hideLoadingSpinner();
              this.toastr.error(`Error ${error} al registrar`);
            });
        }
        else {
          this.spinner.hideLoadingSpinner();
          this.router.navigate(['']);
          this.toastr.success("Alta realizada");
        }
      },
      (error) => {
        console.error(error);
        this.spinner.hideLoadingSpinner();
        this.toastr.error(`Error ${error} al registrar`);
      });
  }

  onFileInput(event) {
    if (event.target.files.length > 0) {
      this.selectedFile = <File>event.target.files[0];
      console.info("file", this.selectedFile);
      this.altaUsuarioForm.get('foto').setValue(this.selectedFile);
    }
  }

}
