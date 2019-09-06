import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BienvenidoComponent } from './componentes/bienvenido/bienvenido.component';
import { LoginComponent } from './componentes/login/login.component';
import { UsuarioListadoComponent } from './componentes/usuario-listado/usuario-listado.component';
import { UsuarioComponent } from './componentes/usuario/usuario.component';
import { ListadoDeUsuariosComponent } from './componentes/listado-de-usuarios/listado-de-usuarios.component';
import { GrillaComponent } from './componentes/grilla/grilla.component';
import { CardComponent } from './componentes/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    BienvenidoComponent,
    LoginComponent,
    UsuarioComponent,
    UsuarioListadoComponent,
    ListadoDeUsuariosComponent,
    GrillaComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
