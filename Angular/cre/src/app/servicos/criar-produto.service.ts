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
export class CriarProdutoService {

  constructor(private clienteHttp: HttpClient) {}

  adicionarProduto(produto: Produto): Observable<any> {
    return this.clienteHttp.post<Produto>('http://localhost:7001/CRE-1.0-SNAPSHOT/api/auth/criar-produto/' + produto.funcionario, produto, httpOptionsJson);
  }

}
