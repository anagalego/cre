import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Produto } from '../models/produto';

@Component({
  selector: 'app-produto-eliminado',
  templateUrl: './produto-eliminado.component.html',
  styleUrls: ['./produto-eliminado.component.css']
})
export class ProdutoEliminadoComponent implements OnInit {

  produto: Produto = new Produto();

  constructor(private router: Router) { }

  ngOnInit() {
    this.produto.id = localStorage.getItem('id-produto');
    this.produto.categoria = localStorage.getItem('categoria-produto');
    this.produto.cor = localStorage.getItem('cor-produto');
    this.produto.pvp = JSON.parse(localStorage.getItem('pvp-produto'));
    this.produto.data = localStorage.getItem('data-produto');
  }

  ok() {
    this.router.navigate(['menu']);
  }

}
