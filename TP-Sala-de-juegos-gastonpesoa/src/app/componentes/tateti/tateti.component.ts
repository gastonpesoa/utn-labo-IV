import { Component, OnInit } from '@angular/core';
import { JuegoTateti } from '../../clases/juego-tateti';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-tateti',
  templateUrl: './tateti.component.html',
  styleUrls: ['./tateti.component.css']
})
export class TatetiComponent implements OnInit {
  nuevoJuego: JuegoTateti;
  enJuego: boolean = false;
  turnoJugador = false;
  cuentaMarcas: number = 0;
  imgCruz: string = '../../../assets/imagenes/cruz.png'
  imgCirculo: string = '../../../assets/imagenes/circulo.png'

  constructor(private toastr: ToastrService) {
    this.nuevoJuego = new JuegoTateti();
  }

  generarJugada() {
    let row = Math.floor(Math.random() * 3);
    let col = Math.floor(Math.random() * 3);
    this.marcarJugada(row, col, true);
  }


  marcarJugada(row: number, column: number, jugadaGenerada: boolean) {
    if (jugadaGenerada) {
      if (this.nuevoJuego.tablero[row][column] != "" && this.cuentaMarcas < 9) {
        this.generarJugada()
      } else {
        this.cuentaMarcas++;
        this.nuevoJuego.tablero[row][column] = this.imgCruz;
        this.turnoJugador = true;
        if(this.nuevoJuego.verificarTresEnLinea(this.imgCruz)){
          if(!this.nuevoJuego.verificar()){
            this.toastr.error("Perdedor..", "Te derrotaron");
          }
        }
      }
    } else {
      if (this.nuevoJuego.tablero[row][column] == "") {
        this.cuentaMarcas++;
        this.nuevoJuego.tablero[row][column] = this.imgCirculo;
        this.turnoJugador = false;
        if (!this.nuevoJuego.verificarTresEnLinea(this.imgCirculo)) {
          setTimeout(() => {
            this.generarJugada();
          }, 400);
        } else {
          this.toastr.success("Felicitaciones!", "Ganaste esta vez");
        }
      }
    }
  }

  nuevo() {
    this.nuevoJuego.juegoTerminado = false;
    this.nuevoJuego.reset();
    this.enJuego = true;
    this.turnoJugador = true;
    this.cuentaMarcas = 0;
  }

  ngOnInit() {
  }

}
