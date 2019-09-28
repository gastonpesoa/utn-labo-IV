import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GrillaComponent } from './componentes/grilla/grilla.component';
import { HttpClientModule } from '@angular/common/http';
import { BotonComponent } from './componentes/boton/boton.component';

@NgModule({
  declarations: [
    AppComponent,
    GrillaComponent,
    BotonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
