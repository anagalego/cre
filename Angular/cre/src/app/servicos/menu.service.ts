import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produto } from '../models/produto';
const httpOptionsJson = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private clienteHttp: HttpClient) {
  }

  mostrarProdutosEquipa(): Observable<Produto[]> {
    return this.clienteHttp.get<Produto[]>('http://localhost:7001/CRE-1.0-SNAPSHOT/api/auth/menu');    
  }

}
