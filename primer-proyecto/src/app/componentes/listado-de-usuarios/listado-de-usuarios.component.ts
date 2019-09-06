import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Ususario } from '../../clases/ususario';


@Component({
  selector: 'app-listado-de-usuarios',
  templateUrl: './listado-de-usuarios.component.html',
  styleUrls: ['./listado-de-usuarios.component.css']
})
export class ListadoDeUsuariosComponent implements OnInit {

  @Input() public usuarios = [];
  @Output() selectedUsr = new EventEmitter<any>(); 

  constructor() {
    // this.usuarios = [
    //   new Ususario("juan", "juan123"), 
    //   new Ususario("marcos", "marcos123"),
    //   new Ususario("pedro", "pedro123")
    // ];
  }

  ngOnInit() {
  }

  public editar(usuario: Ususario){
    this.selectedUsr.emit(usuario);
  }

}
