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
export class CriarCategoriaService {
  constructor(private clienteHttp: HttpClient) {}

  criarCategoria(categoria: Categoria): Observable<any> {
    return this.clienteHttp.post<Categoria>('http://localhost:7001/CRE-1.0-SNAPSHOT/api/categorias/criar', categoria, httpOptionsJson);
  }
}






