import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { JuegoAgilidad } from '../../clases/juego-agilidad';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-agilidad-aritmetica',
  templateUrl: './agilidad-aritmetica.component.html',
  styleUrls: ['./agilidad-aritmetica.component.css']
})
export class AgilidadAritmeticaComponent implements OnInit {

  nuevoJuego: JuegoAgilidad;
  enJuego: boolean;
  tiempo: number;
  repetidor: any;

  constructor(private toastr: ToastrService) {
    this.enJuego = false;
    this.tiempo = 5;
    this.nuevoJuego = new JuegoAgilidad();
  }

  setInputNumeroIngresado(){
    setTimeout(()=>{
      (<HTMLInputElement>document.getElementById("input-numero-ingresado")).value = null;
      document.getElementById("input-numero-ingresado").focus();
    }, 1);
  }

  nuevo(): void {
    this.setInputNumeroIngresado();
    this.enJuego = true;
    this.nuevoJuego.generarOperacion();
    this.repetidor = setInterval(() => {
      this.tiempo--;
      if (this.tiempo == 0) {
        clearInterval(this.repetidor);
        this.verificar();
        this.tiempo = 5;
      }
    }, 900);
  }

  verificar() {
    if (this.nuevoJuego.verificar()) {
      this.mostrarMensaje("Ganaste un porrón", true);
    } else {
      this.mostrarMensaje("Andá a la escuela", false);
    }
    this.enJuego = false;
    this.nuevoJuego.reset();
  }

  mostrarMensaje(mensaje: string = "este es el msg", ganador: boolean = false) {
    if (ganador) {
      this.toastr.success(mensaje, "¡Felicitaciones!");
    } else {
      this.toastr.error(mensaje, "Seguí participando");
    }
  }

  ngOnInit() {
  }

}
