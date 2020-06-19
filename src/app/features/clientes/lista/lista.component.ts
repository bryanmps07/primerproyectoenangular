import { Component, OnInit } from '@angular/core';
import { ModeloClientes } from '../clientes.model';
import { ClientesService } from 'src/app/services/clientes.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  public datos : ModeloClientes;

  constructor(
    private _clientes : ClientesService
  ) { }

  ngOnInit(): void {
    this.getData();
  }
  
  getData () {
    this._clientes.getData().subscribe(
      Response => {
        this.datos = Response.results;
        console.log(this.datos);
      },
      error => {
        console.log(error);
      }
      )
  }

}
