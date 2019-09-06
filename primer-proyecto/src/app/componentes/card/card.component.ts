import { Component, OnInit, Input } from '@angular/core';
import { Ususario } from '../../clases/ususario';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() usuario: Ususario;
  constructor() { }

  ngOnInit() {
  }

}
