import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrincipalComponent } from './componentes/principal/principal.component';
import { JuegosComponent } from './componentes/juegos/juegos.component';
import { MenuCardComponent } from './componentes/menu-card/menu-card.component';
import { AgilidadAritmeticaComponent } from './componentes/agilidad-aritmetica/agilidad-aritmetica.component';
import { PiedraPapelTijeraComponent } from './componentes/piedra-papel-tijera/piedra-papel-tijera.component';
import { AdivinaElNumeroComponent } from './componentes/adivina-el-numero/adivina-el-numero.component';
import { SimonDiceComponent } from './componentes/simon-dice/simon-dice.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { CabeceraComponent } from './componentes/cabecera/cabecera.component';

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    JuegosComponent,
    MenuCardComponent,
    AgilidadAritmeticaComponent,
    PiedraPapelTijeraComponent,
    AdivinaElNumeroComponent,
    SimonDiceComponent,
    MenuComponent,
    CabeceraComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
