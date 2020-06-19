import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { Error404Component } from './features/error404/error404.component';


const routes: Routes = [  
  { path : '', redirectTo : 'home', pathMatch : 'full' },
  { path : 'home', component : HomeComponent },
  { path : 'clientes', loadChildren: () => import('./features/clientes/clientes.module').then(m => m.ClientesModule) },
  { path : '**', component : Error404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
