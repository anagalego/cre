import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Funcionario } from '../models/funcionario';
import { ListaProdutosService } from '../servicos/produtos/produtos-funcionario.service';
import { Produto } from '../models/produto';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  appComponent: AppComponent;
  funcionario: Funcionario = new Funcionario();
  listaProdutos: Produto[];

  constructor(private router: Router, private listaProdutosService: ListaProdutosService) { }

  ngOnInit() {
    this.funcionario.id = sessionStorage.getItem('id');
    this.funcionario.nome = sessionStorage.getItem('nome');

    this.listaProdutosService.listarProdutos(this.funcionario).subscribe(produtos => {
      this.listaProdutos = produtos;
    });  

  }

  eliminarProduto() {
    this.router.navigate(['eliminar-produto']);
  }

  faturarProduto() {
    this.router.navigate(['faturar-produto']);
  }

  novoProduto() {
    this.router.navigate(['criar-produto']);
  }

  ok() {
    this.router.navigate(['menu']);
  }

}
