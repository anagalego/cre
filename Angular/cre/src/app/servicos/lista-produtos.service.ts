import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Funcionario } from '../models/funcionario';
const httpOptionsJson = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class ListaProdutosService {

  constructor(private clienteHttp: HttpClient) { }



  listarProdutos(funcionario: Funcionario): Observable<any> {
    return this.clienteHttp.get<any>('http://localhost:7001/CRE-1.0-SNAPSHOT/api/auth/produtos/' + funcionario.id);
  }
}
