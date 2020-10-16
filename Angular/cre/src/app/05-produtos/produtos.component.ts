import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Funcionario } from '../models/funcionario';
import { ListaProdutosService } from '../servicos/lista-produtos.service';
import { Produto } from '../models/produto';
import { Login } from '../models/login';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  funcionario: Funcionario;

  listaProdutos: Array<Produto>;

  constructor(private router: Router, private listaProdutosService: ListaProdutosService) {
    this.listaProdutos = new Array<Produto>();
    this.funcionario = new Funcionario();
  }

  ngOnInit() {
    this.funcionario.nome = localStorage.getItem('id');
    this.funcionario.id = localStorage.getItem('login-id');

    this.listaProdutosService.listarProdutos(this.funcionario).subscribe(produtos => {
      console.log(produtos);
      this.listaProdutos = produtos;
    });

    

  }

  apresentarProdutosFaturados() {
    this.listaProdutos.forEach(produto => {
      if(produto.faturado){
        document
      }
    })
  }

  criarProduto() {
    this.router.navigate(['criar-produto']);
  }

  eliminarProduto() {
    this.router.navigate(['eliminar-produto']);
  }

  faturarProduto() {
    this.router.navigate(['faturar-produto']);
  }

}
