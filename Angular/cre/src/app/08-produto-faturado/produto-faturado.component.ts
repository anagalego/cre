import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { Produto } from '../models/produto';

@Component({
  selector: 'app-produto-faturado',
  templateUrl: './produto-faturado.component.html',
  styleUrls: ['./produto-faturado.component.css']
})
export class ProdutoFaturadoComponent implements OnInit {

  appComponent: AppComponent;
  produto: Produto = new Produto();

  constructor(private router: Router) { }

  ngOnInit() {
    this.produto.id = localStorage.getItem('id-produto');
    this.produto.categoria = localStorage.getItem('categoria-produto');
    this.produto.cor = localStorage.getItem('cor-produto');
    this.produto.data = localStorage.getItem('data-produto');
  }

  ok() {
    this.router.navigate(['menu']);
  }

}
