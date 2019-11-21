import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GrillaComponent } from './componentes/grilla/grilla.component';
import { ProductosComponent } from './componentes/productos/productos.component';
import { VentasComponent } from './componentes/ventas/ventas.component';
import { ListadoUsuariosComponent } from './componentes/listado-usuarios/listado-usuarios.component';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';
import { AltaUsuarioComponent } from './componentes/alta-usuario/alta-usuario.component';
import { LoginGuard } from './guards/login.guard';
import { NoLoginGuard } from './guards/no-login.guard';
import { AdminGuard } from './guards/admin.guard';
import { AlumnoGuard } from './guards/alumno.guard';
import { GrillaMateriasInscComponent } from './componentes/grilla-materias-insc/grilla-materias-insc.component';
import { ListaMateriasCargoComponent } from './componentes/lista-materias-cargo/lista-materias-cargo.component';
import { ProfesorGuard } from './guards/profesor.guard';
import { AlumnosInscEnMateriaCargoComponent } from './componentes/alumnos-insc-en-materia-cargo/alumnos-insc-en-materia-cargo.component';


const routes: Routes = [
  { path: 'bienvenido', component: HomeComponent, canActivate: [LoginGuard] },
  { path: '', component: HomeComponent, canActivate: [LoginGuard] },
  {
    path: 'peliculas',
    component: ProductosComponent,
    children: [
      // { path: '', component: GrillaComponent, canActivate: [LoginGuard] },
    ],
    canActivate: [LoginGuard]
  },
  {
    path: 'actor',
    component: VentasComponent,
    children: [

    ],
    canActivate: [LoginGuard]
  },

  { path: 'login', component: LoginComponent, canActivate: [NoLoginGuard] },
  { path: 'alta-usuario', component: AltaUsuarioComponent, canActivate: [NoLoginGuard] },
  { path: 'alta-materia', component: GrillaComponent, canActivate: [AdminGuard, LoginGuard] },
  { path: 'listado-usuarios', component: ListadoUsuariosComponent, canActivate: [AdminGuard, LoginGuard] },
  { path: 'inscripcion', component: GrillaMateriasInscComponent, canActivate: [AlumnoGuard, LoginGuard] },
  { path: 'materias-a-cargo', component: AlumnosInscEnMateriaCargoComponent, canActivate: [ProfesorGuard, LoginGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
