import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private authService: AuthService) { }

  getTest(){
    return this.authService.getTest();
  }

  getUsers(){
    return this.authService.getUsers("usuario/");
  }

  login(username: string, password: string){
    return this.authService.login(username, password);
  }
}
