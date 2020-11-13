import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Funcionario } from 'src/app/models/funcionario';
const httpOptionsJson = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class ListarFuncionariosService {

  constructor(private clienteHttp: HttpClient) {
  }

  listarFuncionarios(): Observable<Funcionario[]> {
    return this.clienteHttp.get<Funcionario[]>('http://localhost:7001/CRE-1.0-SNAPSHOT/api/funcionarios/lista');    
  }

}