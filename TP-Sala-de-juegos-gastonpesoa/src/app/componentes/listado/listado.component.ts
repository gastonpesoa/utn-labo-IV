import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/servicios/data.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  usuarios: any;

  constructor(private dataServ: DataService) { }


  ngOnInit() {
    this.dataServ.getUsers().subscribe(res => {
      console.info("res", res);
      this.usuarios = res;
    })
  }

}
