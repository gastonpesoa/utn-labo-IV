import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrincipalComponent } from './componentes/principal/principal.component';
import { JuegosComponent } from './componentes/juegos/juegos.component';
import { MenuCardComponent } from './componentes/menu-card/menu-card.component';
import { AgilidadAritmeticaComponent } from './componentes/agilidad-aritmetica/agilidad-aritmetica.component';
import { PiedraPapelTijeraComponent } from './componentes/piedra-papel-tijera/piedra-papel-tijera.component';
import { AdivinaElNumeroComponent } from './componentes/adivina-el-numero/adivina-el-numero.component';
import { SimonDiceComponent } from './componentes/simon-dice/simon-dice.component';
import { AnagramaComponent } from './componentes/anagrama/anagrama.component';
import { TatetiComponent } from './componentes/tateti/tateti.component';
import { AcercaComponent } from './componentes/acerca/acerca.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { AuthGuard } from './guards/auth.guard';
import { NologinGuard } from './guards/nologin.guard';
import { ListadoComponent } from './componentes/listado/listado.component';


const routes: Routes = [
  { path: '', redirectTo: '/Principal', pathMatch: 'full' },
  { path: 'Principal', component: PrincipalComponent, canActivate: [AuthGuard] },
  { path: 'Acerca', component: AcercaComponent },
  { path: 'login', component: LoginComponent, canActivate: [NologinGuard] },
  { path: 'registro', component: RegistroComponent, canActivate: [NologinGuard] },
  { path: 'listado', component: ListadoComponent, canActivate: [AuthGuard] },
  {
    path: 'Juegos',
    component: JuegosComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', component: MenuCardComponent },
      { path: 'Agilidad', component: AgilidadAritmeticaComponent },
      { path: 'PiedraPapelTijera', component: PiedraPapelTijeraComponent },
      { path: 'Adivina', component: AdivinaElNumeroComponent },
      { path: 'Simon', component: SimonDiceComponent },
      { path: 'Anagrama', component: AnagramaComponent },
      { path: 'Tateti', component: TatetiComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
