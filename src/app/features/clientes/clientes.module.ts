import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientesRoutingModule } from './clientes-routing.module';
import { CrearComponent } from './crear/crear.component';
import { ListaComponent } from './lista/lista.component';
import { ClientesService } from 'src/app/services/clientes.service';


@NgModule({
  declarations: [CrearComponent, ListaComponent],
  imports: [
    CommonModule,
    ClientesRoutingModule,
  ],
  providers: [
    ClientesService
  ]
})
export class ClientesModule { }
