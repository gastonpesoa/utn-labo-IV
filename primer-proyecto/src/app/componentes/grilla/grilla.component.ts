import { Component, OnInit, Input } from '@angular/core';
import { Ususario } from '../../clases/ususario';

@Component({
  selector: 'app-grilla',
  templateUrl: './grilla.component.html',
  styleUrls: ['./grilla.component.css']
})
export class GrillaComponent implements OnInit {

  @Input() public lista = [];

  constructor() { }

  ngOnInit() {
  }

}
