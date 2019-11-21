import { Component } from '@angular/core';
import { SpinnerService } from './servicios/spinner.service';
import { AuthService } from './servicios/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Sistemas UTN FRA';
  constructor(public spinnerServ: SpinnerService, private authService: AuthService) { }
}
