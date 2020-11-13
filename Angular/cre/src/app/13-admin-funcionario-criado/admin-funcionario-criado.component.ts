import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { Funcionario } from '../models/funcionario';

@Component({
  selector: 'app-admin-funcionario-criado',
  templateUrl: './admin-funcionario-criado.component.html',
  styleUrls: ['./admin-funcionario-criado.component.css']
})
export class AdminFuncionarioCriadoComponent implements OnInit {

  appComponent: AppComponent;
  funcionario: Funcionario = new Funcionario();
  titulo: string = '';
  admin: string = '';

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.funcionario.id = sessionStorage.getItem('funcionario-id');
    this.funcionario.nome = sessionStorage.getItem('funcionario-nome');
    this.titulo = sessionStorage.getItem('funcionario-feminino');
    this.admin = sessionStorage.getItem('funcionario-admin');
  }

  ok() {
    this.router.navigate(['menu']);
  }

}
