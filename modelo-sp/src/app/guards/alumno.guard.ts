import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../servicios/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AlumnoGuard implements CanActivate {
  
  constructor(
    private authService: AuthService,
    private route: Router
  ) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let token = this.authService.decodeToken();
    if (token.data.tipo != 'alumno') {
      this.route.navigate(['']);
      return false;
    }
    return true;
  }
}
