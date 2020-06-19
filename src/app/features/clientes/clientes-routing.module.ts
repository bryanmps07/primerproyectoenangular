import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrearComponent } from './crear/crear.component';
import { ListaComponent } from './lista/lista.component';


const routes: Routes = [
  {
    path : 'crear', component : CrearComponent
  },
  {
    path : 'lista', component : ListaComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientesRoutingModule { }
