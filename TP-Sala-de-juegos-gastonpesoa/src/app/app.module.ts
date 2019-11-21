import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToastrModule } from 'ngx-toastr';
import { PrincipalComponent } from './componentes/principal/principal.component';
import { JuegosComponent } from './componentes/juegos/juegos.component';
import { MenuCardComponent } from './componentes/menu-card/menu-card.component';
import { AgilidadAritmeticaComponent } from './componentes/agilidad-aritmetica/agilidad-aritmetica.component';
import { PiedraPapelTijeraComponent } from './componentes/piedra-papel-tijera/piedra-papel-tijera.component';
import { AdivinaElNumeroComponent } from './componentes/adivina-el-numero/adivina-el-numero.component';
import { SimonDiceComponent } from './componentes/simon-dice/simon-dice.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { CabeceraComponent } from './componentes/cabecera/cabecera.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { AnagramaComponent } from './componentes/anagrama/anagrama.component';
import { TatetiComponent } from './componentes/tateti/tateti.component';
import { AcercaComponent } from './componentes/acerca/acerca.component';
import { firebaseConfig } from 'src/environments/environment';
import { LoginComponent } from './componentes/login/login.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { ListadoComponent } from './componentes/listado/listado.component';

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
    CabeceraComponent,
    FooterComponent,
    AnagramaComponent,
    TatetiComponent,
    AcercaComponent,
    LoginComponent,
    RegistroComponent,
    ListadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
