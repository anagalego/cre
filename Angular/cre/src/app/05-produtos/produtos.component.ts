import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Funcionario } from '../models/funcionario';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  funcionario: Funcionario = new Funcionario();

  constructor(private router: Router) { }

  ngOnInit() {
    this.funcionario.nome = localStorage.getItem('id'); 
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
