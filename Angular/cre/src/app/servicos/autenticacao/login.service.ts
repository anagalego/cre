import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from '../../models/login';
const httpOptionsJson = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}


@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {
  constructor(private clienteHttp: HttpClient) {}

  autentica(login: Login): Observable<any> {
    return this.clienteHttp.post<Login>('http://localhost:7001/CRE-1.0-SNAPSHOT/api/auth/login', login, httpOptionsJson);
  }
}
