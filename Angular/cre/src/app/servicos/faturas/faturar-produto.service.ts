import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Fatura } from 'src/app/models/fatura';
const httpOptionsJson = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class FaturarProdutoService {
  constructor(private clienteHttp: HttpClient) {}

  faturarProduto(fatura: Fatura): Observable<any> {
    return this.clienteHttp.post<Fatura>('http://localhost:7001/CRE-1.0-SNAPSHOT/api/faturas/criar', fatura, httpOptionsJson);
  }
}

