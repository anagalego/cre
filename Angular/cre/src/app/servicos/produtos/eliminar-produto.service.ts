import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produto } from 'src/app/models/produto';
import { Funcionario } from '../../models/funcionario';
const httpOptionsJson = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class EliminarProdutoService {

  constructor(private clienteHttp: HttpClient) { }

  eliminarProduto(produto: Produto): Observable<Produto> {
    const params = produto.id;
    return this.clienteHttp.delete<Produto>(`http://localhost:7001/CRE-1.0-SNAPSHOT/api/produtos/eliminar/${params}`);
  }
}


