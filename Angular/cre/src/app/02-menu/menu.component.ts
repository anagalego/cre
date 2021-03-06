import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { Funcionario } from '../models/funcionario';
import { Produto } from '../models/produto';
import { ProdutosEquipaService } from '../servicos/produtos/produtos-equipa.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  appComponent: AppComponent;
  funcionario: Funcionario = new Funcionario();
  listaProdutos: Produto[] = Produto[100]; 
  mensagem_boasVindas: string = sessionStorage.getItem('boas-vindas');

  constructor(private router: Router, private mostrarProdutosEquipa: ProdutosEquipaService) { }

  ngOnInit(){
    this.funcionario.nome = sessionStorage.getItem('nome'); 
    this.mostrarProdutosEquipa.mostrarProdutosEquipa().subscribe(produtos => this.listaProdutos = produtos);
  }

  novoProduto() {
    this.router.navigate(['criar-produto']);
  }

  consultarProdutosFuncionario() {
    this.router.navigate(['produtos']);
  }

}
