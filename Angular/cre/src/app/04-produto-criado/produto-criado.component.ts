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
    this.produto.pvp = JSON.parse(localStorage.getItem('pvp-produto'));
    this.produto.data = localStorage.getItem('data-produto');
  }
<<<<<<< HEAD:Angular/cre/src/app/04-produto-criado/produto-criado.component.ts

  ok() {
    this.router.navigate(['menu']);
  }
=======
>>>>>>> deaf0f56abcde25a8002527604ce5cb329fb053d:Angular/cre/src/app/04-produto-criado/produto-criado.component.ts
}
