import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cor } from 'src/app/models/cor';
const httpOptionsJson = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class CriarCorService {
  constructor(private clienteHttp: HttpClient) {}

  criarCor(cor: Cor): Observable<any> {
    return this.clienteHttp.post<Cor>('http://localhost:7001/CRE-1.0-SNAPSHOT/api/funcionarios/criar', cor, httpOptionsJson);
  }
}
