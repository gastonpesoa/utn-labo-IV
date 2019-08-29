import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrincipalComponent } from './componentes/principal/principal.component';
import { JuegosComponent } from './componentes/juegos/juegos.component';
import { MenuCardComponent } from './componentes/menu-card/menu-card.component';
import { AgilidadAritmeticaComponent } from './componentes/agilidad-aritmetica/agilidad-aritmetica.component';
import { PiedraPapelTijeraComponent } from './componentes/piedra-papel-tijera/piedra-papel-tijera.component';
import { AdivinaElNumeroComponent } from './componentes/adivina-el-numero/adivina-el-numero.component';
import { SimonDiceComponent } from './componentes/simon-dice/simon-dice.component';


const routes: Routes = [
  { path: '', redirectTo: '/Principal', pathMatch: 'full' },
  { path: 'Principal', component: PrincipalComponent },

  {
    path: 'Juegos',
    component: JuegosComponent,
    children: [
      { path: '', component: MenuCardComponent },
      { path: 'Agilidad', component: AgilidadAritmeticaComponent },
      { path: 'PiedraPapelTijera', component: PiedraPapelTijeraComponent },
      { path: 'Adivina', component: AdivinaElNumeroComponent },
      { path: 'Simon', component: SimonDiceComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
