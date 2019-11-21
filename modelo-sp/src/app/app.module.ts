import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { FileUploadModule } from 'ng2-file-upload';
import { FileSelectDirective } from 'ng2-file-upload';
import { JwtModule, JwtModuleOptions } from "@auth0/angular-jwt";

import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GrillaComponent } from './componentes/grilla/grilla.component';
import { HttpClientModule } from '@angular/common/http';

import { CabeceraComponent } from './componentes/cabecera/cabecera.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { ProductosComponent } from './componentes/productos/productos.component';
import { VentasComponent } from './componentes/ventas/ventas.component';
import { ListadoUsuariosComponent } from './componentes/listado-usuarios/listado-usuarios.component';
import { HomeComponent } from './componentes/home/home.component';
import { CarouselComponent } from './componentes/carousel/carousel.component';
import { CardsComponent } from './componentes/cards/cards.component';
import { LoginComponent } from './componentes/login/login.component';
import { AltaUsuarioComponent } from './componentes/alta-usuario/alta-usuario.component';
import { AltaMateriaComponent } from './componentes/alta-materia/alta-materia.component';
import { InscripcionMateriaComponent } from './componentes/inscripcion-materia/inscripcion-materia.component';
import { AdminTypePipe } from './pipes/admin-type.pipe';
import { AlumnoTypePipe } from './pipes/alumno-type.pipe';
import { ProfesorTypePipe } from './pipes/profesor-type.pipe';
import { UserFilterTypePipe } from './pipes/user-filter-type.pipe';
import { GrillaMateriasInscComponent } from './componentes/grilla-materias-insc/grilla-materias-insc.component';
import { HighlightCupoDirective } from './directivas/highlight-cupo.directive';
import { HayCupoDirective } from './directivas/hay-cupo.directive';
import { ListaMateriasCargoComponent } from './componentes/lista-materias-cargo/lista-materias-cargo.component';
import { AlumnosInscEnMateriaCargoComponent } from './componentes/alumnos-insc-en-materia-cargo/alumnos-insc-en-materia-cargo.component';



const JWT_Module_Options: JwtModuleOptions = {
  config: {
    tokenGetter: () => {
      return localStorage.getItem("access_token");
    },
    whitelistedDomains: ["localhost:4200"]
  }
};

@NgModule({
  declarations: [
    AppComponent,
    GrillaComponent,
    CabeceraComponent,
    FooterComponent,
    NavbarComponent,
    ProductosComponent,
    VentasComponent,
    ListadoUsuariosComponent,
    HomeComponent,
    CarouselComponent,
    CardsComponent,
    LoginComponent,
    AltaUsuarioComponent,
    AltaMateriaComponent,
    InscripcionMateriaComponent,
    AdminTypePipe,
    AlumnoTypePipe,
    ProfesorTypePipe,
    UserFilterTypePipe,
    GrillaMateriasInscComponent,
    HighlightCupoDirective,
    HayCupoDirective,
    ListaMateriasCargoComponent,
    AlumnosInscEnMateriaCargoComponent
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
    FileUploadModule,
    JwtModule.forRoot(JWT_Module_Options),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
