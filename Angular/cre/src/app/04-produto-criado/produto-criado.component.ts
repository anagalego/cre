import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { Produto } from '../models/produto';

@Component({
  selector: 'app-produto-criado',
  templateUrl: './produto-criado.component.html',
  styleUrls: ['./produto-criado.component.css']
})
export class ProdutoCriadoComponent {

  appComponent: AppComponent;
  produto: Produto = new Produto();

  constructor(private router: Router) { }

  ngOnInit() {
    this.produto.id = sessionStorage.getItem('id-produto');
    this.produto.categoria = sessionStorage.getItem('categoria-produto');
    this.produto.cor = sessionStorage.getItem('cor-produto');
    this.produto.data = sessionStorage.getItem('data-produto');
  }

  ok() {
    this.router.navigate(['menu']);
  }
}
