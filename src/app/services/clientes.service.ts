import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, identity } from 'rxjs';
import { ModeloClientes } from '../features/clientes/clientes.model';


@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  public url : any;
  
  constructor(
    private _http: HttpClient,
  ) {
    this.url = 'https://api.themoviedb.org/3/movie/popular?api_key=e0a1508539fd89b54a98e8ad94dd395b&language=en-US&page=1';
   }

   getData(): Observable<any>{
     
    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    return this._http.get(this.url , {  headers: headers });

}





}
