import { BienvenidoComponent } from './componentes/bienvenido/bienvenido.component';
import { LoginComponent } from './componentes/login/login.component';
import { UsuarioComponent } from './componentes/usuario/usuario.component';
import { UsuarioListadoComponent } from './componentes/usuario-listado/usuario-listado.component';
import { CountriesListComponent } from './componentes/countries-list/countries-list.component'
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { DirectiveTestComponent } from './componentes/directive-test/directive-test.component';

const routes: Routes = [
  { path: 'inicio', component: BienvenidoComponent, data: {animation: 'InicioPage'} },
  { path: 'login', component: LoginComponent, data: {animation: 'LoginPage'} },
  { path: 'usuario', component: UsuarioComponent },
  { path: 'listado', component: UsuarioListadoComponent },
  { path: 'countries', component: CountriesListComponent },
  { path: '', component: DirectiveTestComponent },
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    BrowserAnimationsModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
