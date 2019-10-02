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


const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'productos',
    component: ProductosComponent,
    children: [
      { path: '', component: GrillaComponent },
      { path: 'alta', component: AltaProductoComponent }
    ]
  },
  {
    path: 'ventas',
    component: VentasComponent,
    children: [
      { path: 'listado', component: ListadoVentasComponent },
      { path: 'nueva', component: NuevaVentaComponent }
    ]
  },
  { path: 'busqueda', component: BuscarComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
