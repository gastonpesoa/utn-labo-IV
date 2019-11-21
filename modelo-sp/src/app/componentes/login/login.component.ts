import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../servicios/usuario.service';
import { Router } from '@angular/router'
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { SpinnerService } from 'src/app/servicios/spinner.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuariosLogin: Array<any> = [
    { id: 0, email: "admin@admin.com", password: "123" },
    { id: 1, email: "gastonpesoa@mail.com", password: "gaston123" },
    { id: 2, email: "josearcadia@mail.com", password: "jose123" },
    { id: 3, email: "octaviovillegas@mail.com", password: "octavio123" },
    { id: 4, email: "sandrachaus@mail.com", password: "sandra123" },
    { id: 5, email: "luisalberto@mail.com", password: "luis123" },
  ]

  title: string = "Login";

  loginForm = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    password: new FormControl('', Validators.required)
  });

  constructor(
    private userService: UsuarioService,
    private router: Router,
    private toastr: ToastrService,
    public spinner: SpinnerService) {
  }

  ngOnInit() {
  }

  login() {
    this.spinner.showLoadingSpinner();
    this.userService.login(this.loginForm.value.email, this.loginForm.value.password)
      .subscribe(res => {
        console.info("res: ", res);
        if (res.Estado == "OK") {
          localStorage.setItem("token", res.Token); // Store token
          this.spinner.hideLoadingSpinner()
          this.router.navigate(['']);
        } else {
          this.spinner.hideLoadingSpinner()
          this.toastr.error("Usuario o contraseña incorrectos");
        }
      });
  }

  onChange(id) {
    if (id != '-1') {
      this.loginForm.controls['email'].setValue(this.usuariosLogin[id].email);
      this.loginForm.controls['password'].setValue(this.usuariosLogin[id].password);
    }
  }

}
