import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { FileUploadModule } from 'ng2-file-upload';
import { FileSelectDirective } from 'ng2-file-upload';

import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GrillaComponent } from './componentes/grilla/grilla.component';
import { HttpClientModule } from '@angular/common/http';
import { BotonComponent } from './componentes/boton/boton.component';
import { CabeceraComponent } from './componentes/cabecera/cabecera.component';
import { BusquedaComponent } from './componentes/busqueda/busqueda.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { BuscarComponent } from './componentes/buscar/buscar.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { AltaProductoComponent } from './componentes/alta-producto/alta-producto.component';
import { ProductosComponent } from './componentes/productos/productos.component';
import { VentasComponent } from './componentes/ventas/ventas.component';
import { ListadoVentasComponent } from './componentes/listado-ventas/listado-ventas.component';
import { NuevaVentaComponent } from './componentes/nueva-venta/nueva-venta.component';
import { HomeComponent } from './componentes/home/home.component';
import { CarouselComponent } from './componentes/carousel/carousel.component';
import { CardsComponent } from './componentes/cards/cards.component';
import { LoginComponent } from './componentes/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    GrillaComponent,
    BotonComponent,
    CabeceraComponent,
    BusquedaComponent,
    FooterComponent,
    BuscarComponent,
    NavbarComponent,
    AltaProductoComponent,
    ProductosComponent,
    VentasComponent,
    ListadoVentasComponent,
    NuevaVentaComponent,
    HomeComponent,
    CarouselComponent,
    CardsComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    FileUploadModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
