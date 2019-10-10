import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {

  title: string;
  subtitle: string;

  constructor() {
    this.title = "Administración de Películas";
    this.subtitle = "UTN FRA - Laboratorio IV";
  }

  ngOnInit() {
  }

}
