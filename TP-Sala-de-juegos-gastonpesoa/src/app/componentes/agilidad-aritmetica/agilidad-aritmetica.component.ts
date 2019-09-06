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

  nuevo(): void {
    this.enJuego = true;    
    this.nuevoJuego.generarOperacion();
    this.repetidor = setInterval(()=>{
      document.getElementById("input-numero-ingresado").focus();
      this.tiempo--;
      if(this.tiempo == 0){
        clearInterval(this.repetidor);
        this.verificar();
        this.enJuego = true;
        this.tiempo = 5;
      }
    }, 900);    
  }

  verificar(){    
    this.enJuego = true;
    clearInterval(this.repetidor);
    if(this.nuevoJuego.verificar()){
      mensaje = "Ganaste un porrón";
      bool = true;
    }else{
      if(!mensaje)
        mensaje = "Andá a la escuela";
    }
    this.mostrarMensaje(mensaje, bool);
  }

  mostrarMensaje(mensaje: string = "este es el msg", ganador: boolean = false) {    
    if (ganador) {
      this.toastr.success(mensaje, "¡Felicitaciones!");
    } else {
      this.toastr.error(mensaje, "Seguí participando");
    }
    this.enJuego = false;
  }

  ngOnInit() {    
  }

}
