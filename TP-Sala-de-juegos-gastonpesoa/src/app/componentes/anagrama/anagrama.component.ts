import { Component, OnInit } from '@angular/core';
import { JuegoAnagrama } from '../../clases/juego-anagrama'
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-anagrama',
  templateUrl: './anagrama.component.html',
  styleUrls: ['./anagrama.component.css']
})
export class AnagramaComponent implements OnInit {
  nuevoJuego: JuegoAnagrama;
  enJuego: boolean = false;
  ocultarVerificar: boolean = false;

  constructor(private toastr: ToastrService) {
    this.nuevoJuego = new JuegoAnagrama();
  }

  keys(): Array<string> {
    return Object.keys(this.nuevoJuego.diccinario);
  }

  palabraSeleccionada(key: string) {
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
    } else {
      this.toastr.error(this.nuevoJuego.palabraIngresada + ", no es anagrama de " + this.nuevoJuego.palabraSeleccionada, 
        "Seguí participando");
    }
    this.enJuego = false;
    this.ocultarVerificar = false;
    this.nuevoJuego.reset();

  }

  ngOnInit() {
  }

}
