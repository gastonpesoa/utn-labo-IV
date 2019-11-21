import { Component, OnInit } from '@angular/core';
import { JuegoAnagrama } from '../../clases/juego-anagrama'
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/servicios/auth.service';
import { DataService } from 'src/app/servicios/data.service';

@Component({
  selector: 'app-anagrama',
  templateUrl: './anagrama.component.html',
  styleUrls: ['./anagrama.component.css']
})
export class AnagramaComponent implements OnInit {
  nuevoJuego: JuegoAnagrama;
  enJuego: boolean = false;
  ocultarVerificar: boolean = false;
  user: any;
  save: boolean = false;

  constructor(private toastr: ToastrService, private authService: AuthService,
    private dataService: DataService) {
    this.nuevoJuego = new JuegoAnagrama();
  }

  keys(): Array<string> {
    return Object.keys(this.nuevoJuego.diccinario);
  }

  palabraSeleccionada(key: string) {
    this.save = false;
    this.nuevoJuego.palabraSeleccionada = this.keys().find((id) => id == key);
    this.enJuego = true;
  }

  verificarUsr() {
    this.ocultarVerificar = true;
    this.nuevoJuego.verificar();
    this.mostrarMensaje();
  }

  mostrarMensaje() {

    if (this.nuevoJuego.gano) {
      this.toastr.success("Lo lograste", "Bravo!");
      this.save = true;
    } else {
      this.toastr.error(this.nuevoJuego.palabraIngresada + ", no es anagrama de " + this.nuevoJuego.palabraSeleccionada, 
        "Seguí participando");
        this.save = false;
    }
    this.enJuego = false;
    this.ocultarVerificar = false;
    this.nuevoJuego.reset();

  }

  guardar(){
    this.user.puntajes['anagrama'] += 1;
    this.dataService.updatePuntaje(this.user.uid, this.user.puntajes)
      .then(() => {
        this.toastr.success("Puntos guardados")
      })
      .catch(err => {
        this.toastr.error("Al guardar: " + err.message, "Error");
      })
  }

  getCurrentUser() {
    let user = this.authService.getCurrentUser();
    this.dataService.getUserByUid(user.uid)
      .subscribe(res => {
        this.user = res;
      })
  }

  ngOnInit() {
    this.getCurrentUser();
  }

}
