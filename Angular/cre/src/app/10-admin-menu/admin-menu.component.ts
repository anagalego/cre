import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { Funcionario } from '../models/funcionario';

@Component({
  selector: 'app-admin-menu',
  templateUrl: './admin-menu.component.html',
  styleUrls: ['./admin-menu.component.css']
})
export class AdminMenuComponent implements OnInit {

  appComponent: AppComponent;
  funcionario: Funcionario = new Funcionario();
  mensagem_boasvindas: string = sessionStorage.getItem('boas-vindas');


  constructor(private router: Router) { }

  ngOnInit(): void {
    this.funcionario.nome = sessionStorage.getItem('nome');
  }


  consultarFuncionarios() {
    this.router.navigate(['admin-funcionarios']);
  }

  novoFuncionario() {
    this.router.navigate(['admin-criar-funcionario']);
  }

  consultarCategorias() {
    this.router.navigate(['admin-categorias']);
  }

  novaCategoria() {
    this.router.navigate(['admin-criar-categoria']);
  }

  consultarCores() {
    this.router.navigate(['admin-cores']);
  }
  
  novaCor() {
    this.router.navigate(['admin-criar-cor']);
  }

  novoProduto() {
    this.router.navigate(['criar-produto']);
  }

  consultarProdutosFuncionario() {
    this.router.navigate(['produtos']);
  }
  
  consultarProdutosEquipa() {
    this.router.navigate(['admin-produtos-equipa']);
  }
  
  

}
