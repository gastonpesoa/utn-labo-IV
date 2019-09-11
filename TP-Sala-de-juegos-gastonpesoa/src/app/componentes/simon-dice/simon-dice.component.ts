import { Component, OnInit } from '@angular/core';
import { JuegoSimonDice } from '../../clases/juego-simon-dice';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-simon-dice',
  templateUrl: './simon-dice.component.html',
  styleUrls: ['./simon-dice.component.css']
})
export class SimonDiceComponent implements OnInit {
  nuevoJuego: JuegoSimonDice;
  enJuego: boolean = false;
  repetidor: any;
  registrarSecuencia = false;

  btnVerde: any = document.getElementById("btn-verde");
  btnRojo: any = document.getElementById("btn-rojo");
  btnAmarillo: any = document.getElementById("btn-amarillo");
  btnAzul: any = document.getElementById("btn-azul");

  soundVerde: any = new Audio('../../../assets/sounds/tono-1.mp3');
  soundRojo: any = new Audio('../../../assets/sounds/tono-2.mp3');
  soundAmarillo: any = new Audio('../../../assets/sounds/tono-3.mp3');
  soundAzul: any = new Audio('../../../assets/sounds/tono-4.mp3');
  soundLoser: any = new Audio('../../../assets/sounds/tono-5.mp3');

  indice: number = -1;
  indiceUsr: number = -1;

  constructor(private toastr: ToastrService) {
    this.nuevoJuego = new JuegoSimonDice();
  }

  nuevo() {
    this.enJuego = true;
    this.nuevoJuego.reset();
    this.generarJugada();
  }

  generarJugada(){
    this.nuevoJuego.generarJugada();
    this.mostrarSecuencia();
  }

  deshabilitarBotones(valor: boolean) {
    (<HTMLInputElement>document.getElementById("btn-verde")).disabled = valor;
    (<HTMLInputElement>document.getElementById("btn-rojo")).disabled = valor;
    (<HTMLInputElement>document.getElementById("btn-amarillo")).disabled = valor;
    (<HTMLInputElement>document.getElementById("btn-azul")).disabled = valor;
  }

  solicitarSecuenciaUsuario() {
    this.registrarSecuencia = true;
    this.indiceUsr = -1;
    this.showBoton(0, 900, false);
    this.deshabilitarBotones(false);
  }

  mostrarSecuencia() {
    console.log(this.nuevoJuego.secuencia);
    this.repetidor = setInterval(() => {

      this.registrarSecuencia = false;
      this.deshabilitarBotones(true);
      this.indice++;

      if (this.indice == this.nuevoJuego.secuencia.length) {
        this.indice = -1;
        this.solicitarSecuenciaUsuario();
        clearInterval(this.repetidor);
      }

      switch (this.nuevoJuego.secuencia[this.indice]) {
        case 1:
          this.showBoton(1, 900, false);
          break;
        case 2:
          this.showBoton(2, 900, false);
          break;
        case 3:
          this.showBoton(3, 900, false);
          break;
        case 4:
          this.showBoton(4, 900, false);
          break;
      }

    }, 1000);
  }

  playSound(number: number) {
    switch (number) {
      case 1:
        this.soundVerde.play();
        break;
      case 2:
        this.soundRojo.play();
        break;
      case 3:
        this.soundAmarillo.play();
        break;
      case 4:
        this.soundAzul.play();
        break;
      case 5:
        this.soundLoser.play();
        break;
    }
  }

  showBoton(boton: number, time: number, soundLoser: boolean): boolean {

    if (soundLoser)
      this.playSound(5);
    else
      this.playSound(boton);

    switch (boton) {
      case 0:
        document.getElementById("btn-verde").style.backgroundColor = "rgba(40,167,69,0.5)";
        document.getElementById("btn-rojo").style.backgroundColor = "rgba(220,53,69,0.5)";
        document.getElementById("btn-amarillo").style.backgroundColor = "rgba(255,193,7,0.5)";
        document.getElementById("btn-azul").style.backgroundColor = "rgba(0,123,255,0.5)";
        return false;
      case 1:
        document.getElementById("btn-verde").style.backgroundColor = "rgba(40,167,69,1)";
        document.getElementById("btn-rojo").style.backgroundColor = "rgba(220,53,69,0.5)";
        document.getElementById("btn-amarillo").style.backgroundColor = "rgba(255,193,7,0.5)";
        document.getElementById("btn-azul").style.backgroundColor = "rgba(0,123,255,0.5)";
        break;
      case 2:
        document.getElementById("btn-verde").style.backgroundColor = "rgba(40,167,69,0.5)";
        document.getElementById("btn-rojo").style.backgroundColor = "rgba(220,53,69,1)";
        document.getElementById("btn-amarillo").style.backgroundColor = "rgba(255,193,7,0.5)";
        document.getElementById("btn-azul").style.backgroundColor = "rgba(0,123,255,0.5)";
        break;
      case 3:
        document.getElementById("btn-verde").style.backgroundColor = "rgba(40,167,69,0.5)";
        document.getElementById("btn-rojo").style.backgroundColor = "rgba(220,53,69,0.5)";
        document.getElementById("btn-amarillo").style.backgroundColor = "rgba(255,193,7,1)";
        document.getElementById("btn-azul").style.backgroundColor = "rgba(0,123,255,0.5)";
        break;
      case 4:
        document.getElementById("btn-verde").style.backgroundColor = "rgba(40,167,69,0.5)";
        document.getElementById("btn-rojo").style.backgroundColor = "rgba(220,53,69,0.5)";
        document.getElementById("btn-amarillo").style.backgroundColor = "rgba(255,193,7,0.5)";
        document.getElementById("btn-azul").style.backgroundColor = "rgba(0,123,255,1)";
        break;
    }

    setTimeout(() => {
      this.showBoton(0, 900, false);
    }, time);
  }

  botonApretado(botonNumber: number) {
    this.indiceUsr++;
    if (this.nuevoJuego.secuencia[this.indiceUsr] != botonNumber) {
      this.nuevoJuego.gano = false;
      this.gameOver(botonNumber);
    } else {
      this.showBoton(botonNumber, 900, false);
    }
    if(this.nuevoJuego.secuencia.length == this.indiceUsr + 1 && this.nuevoJuego.gano){
      this.toastr.success("Continúa así", "Perfecto!");
      this.generarJugada();
    }
  }

  gameOver(botonNumber: number) {
    this.showBoton(botonNumber, 1600, true);
    this.toastr.error("Al menos intentaste", "Asi no era..");
    this.enJuego = false;
    this.indice = -1;
    this.indiceUsr = -1;
    this.deshabilitarBotones(true);
    this.registrarSecuencia = false;
  }

  ngOnInit() {
    setTimeout(()=>{
      this.deshabilitarBotones(true);
    },100)
  }

}
