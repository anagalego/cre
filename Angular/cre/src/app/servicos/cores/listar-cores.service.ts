import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cor } from '../../models/cor';
const httpOptionsJson = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class ListarCoresService {

  constructor(private clienteHttp: HttpClient) {
  }

  listarCores(): Observable<Cor[]> {
    return this.clienteHttp.get<Cor[]>('http://localhost:7001/CRE-1.0-SNAPSHOT/api/cores/lista');    
  }
}

