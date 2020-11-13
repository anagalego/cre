import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categoria } from 'src/app/models/categoria';
const httpOptionsJson = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class ListarCategoriasService {

  constructor(private clienteHttp: HttpClient) {
  }

  listarCategorias(): Observable<Categoria[]> {
    return this.clienteHttp.get<Categoria[]>('http://localhost:7001/CRE-1.0-SNAPSHOT/api/categorias/lista');    
  }

}