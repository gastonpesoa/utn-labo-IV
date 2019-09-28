import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GrillaComponent } from './componentes/grilla/grilla.component';


const routes: Routes = [
  { path: '', component: GrillaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
