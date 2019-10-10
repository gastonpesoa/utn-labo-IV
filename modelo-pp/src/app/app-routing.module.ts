import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GrillaComponent } from './componentes/grilla/grilla.component';
import { BuscarComponent } from './componentes/buscar/buscar.component';
import { AltaProductoComponent } from './componentes/alta-producto/alta-producto.component';
import { ProductosComponent } from './componentes/productos/productos.component';
import { VentasComponent } from './componentes/ventas/ventas.component';
import { ListadoVentasComponent } from './componentes/listado-ventas/listado-ventas.component';
import { NuevaVentaComponent } from './componentes/nueva-venta/nueva-venta.component';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';


const routes: Routes = [
  { path: 'bienvenido', component: HomeComponent },
  {
    path: 'peliculas',
    component: ProductosComponent,
    children: [
      { path: '', component: GrillaComponent },
      { path: 'alta', component: AltaProductoComponent }
    ]
  },
  {
    path: 'actor',
    component: VentasComponent,
    children: [
      { path: 'listado', component: ListadoVentasComponent },
      { path: 'alta', component: NuevaVentaComponent }
    ]
  },
  { path: 'busqueda', component: BuscarComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
