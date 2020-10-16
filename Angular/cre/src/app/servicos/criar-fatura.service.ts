import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Fatura } from '../models/fatura';
const httpOptionsJson = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}

@Injectable({
  providedIn: 'root'
})

export class CriarFaturaService {
  constructor(private clienteHttp: HttpClient) {}

  autentica(fatura: Fatura): Observable<any> {
    return this.clienteHttp.post<Fatura>('http://localhost:7001/CRE-1.0-SNAPSHOT/api/auth/criar-fatura/', fatura, httpOptionsJson);
  }

}