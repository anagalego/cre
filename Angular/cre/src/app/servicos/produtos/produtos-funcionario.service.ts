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
export class ListaProdutosService {

  constructor(private clienteHttp: HttpClient) { }



  listarProdutos(funcionario: Funcionario): Observable<Produto[]> {
    const params = funcionario.id;

    return this.clienteHttp.get<Produto[]>(`http://localhost:7001/CRE-1.0-SNAPSHOT/api/produtos/funcionario/${params}`);
  }
}
