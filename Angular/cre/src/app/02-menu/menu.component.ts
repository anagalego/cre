import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Funcionario } from '../models/funcionario';
import { Produto } from '../models/produto';
import { MenuService } from '../servicos/menu.service';
import { Observable, of } from 'rxjs'; 
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  funcionario: Funcionario = new Funcionario();
  
  listaProdutos: Array<Produto>;

  nome: string;

  produto: Produto;
  

  constructor(private router: Router, private mostrarProdutosServico: MenuService) {
    this.listaProdutos = new Array<Produto>()
  }

  ngOnInit() {
    
    this.funcionario.nome = localStorage.getItem('id'); 

    this.mostrarProdutosServico.mostrarProdutosEquipa().subscribe(produtos => {
      console.log(produtos);
      this.listaProdutos = produtos;
    });

    this.listaProdutos.forEach(produto => {
      produto.data = produto.data.substring(0, 4);
    });
      
  }


  criarProduto() {
    this.router.navigate(['criar-produto']);
  }

  consultarHistorico() {
    this.router.navigate(['produtos']);
  }


}
