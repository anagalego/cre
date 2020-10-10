import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Produto } from '../models/produto';

@Component({
  selector: 'app-produto-criado',
  templateUrl: './produto-criado.component.html',
  styleUrls: ['./produto-criado.component.css']
})
export class ProdutoCriadoComponent {

  produto: Produto = new Produto();

  constructor(private router: Router) { }

  ngOnInit() {
    this.produto.id = localStorage.getItem('id-produto');
    this.produto.categoria = localStorage.getItem('categoria-produto');
    this.produto.cor = localStorage.getItem('cor-produto');
    this.produto.pvp = localStorage.getItem('pvp-produto');
    this.produto.data = localStorage.getItem('data-produto');
  }
}
