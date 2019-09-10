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
  jugadaSeleccionada: number = 0;
  repetidor: any;
  espera: any;
  contador: number = 10;
  registrarSecuencia = false;

  btnVerde: any = document.getElementById("btn-verde");
  btnRojo: any = document.getElementById("btn-rojo");
  btnAmarillo: any = document.getElementById("btn-amarillo");
  btnAzul: any = document.getElementById("btn-azul");

  indice: number = -1;

  constructor(private toastr: ToastrService) {
    this.nuevoJuego = new JuegoSimonDice();
  }

  nuevo() {
    this.enJuego = true;
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
    document.getElementById("btn-verde").style.backgroundColor = "rgba(40,167,69,0.5)";
    document.getElementById("btn-rojo").style.backgroundColor = "rgba(220,53,69,0.5)";
    document.getElementById("btn-amarillo").style.backgroundColor = "rgba(255,193,7,0.5)";
    document.getElementById("btn-azul").style.backgroundColor = "rgba(0,123,255,0.5)";

    this.deshabilitarBotones(false);
    this.indice = -1;
    this.registrarSecuencia = true;

    this.espera = setInterval(() => {
      console.log(this.contador);
      this.contador--;
      if (this.contador == 0) {
        this.verificar();
        clearInterval(this.espera);
        this.contador = 10;
      }
    }, 1000);
  }

  mostrarSecuencia() {
    console.log(this.nuevoJuego.secuencia);
    this.repetidor = setInterval(() => {

      this.registrarSecuencia = false;
      this.deshabilitarBotones(true);
      this.indice++;

      if (this.indice == this.nuevoJuego.secuencia.length) {
        this.solicitarSecuenciaUsuario();
        clearInterval(this.repetidor);
      }

      switch (this.nuevoJuego.secuencia[this.indice]) {
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
    }, 500);
  }

  registrarSecuenciaUsuario(botonNumber: number) {
    this.nuevoJuego.secuenciaUsuario.push(botonNumber);
  }

  verificar() {
    if (this.nuevoJuego.verificar()) {
      this.toastr.success("Continúa así", "Perfecto!");
      this.nuevoJuego.generarJugada();
      this.mostrarSecuencia();
    } else {
      this.toastr.error("Al menos intentaste", "Asi no era..");
      this.enJuego = false;
      this.nuevoJuego.reset();
    }
  }

  ngOnInit() {

  }

}
