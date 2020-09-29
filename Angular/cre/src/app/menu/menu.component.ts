import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Funcionario } from '../models/funcionario';
import { Produto } from '../models/produto';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  funcionario: Funcionario = new Funcionario();
  
  listaProdutos: Produto[] = Produto[100]; 

  constructor(private router: Router) { }

  ngOnInit(){
    this.funcionario.nome = localStorage.getItem('utilizador'); 
  }

  criarProduto() {
    this.router.navigate(['criar-produto']);
  }

  consultarHistorico() {
    console.log('Consultar Histórico');
  }
}
