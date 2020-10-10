import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Fatura } from '../models/fatura';

@Component({
  selector: 'app-faturar-produto',
  templateUrl: './faturar-produto.component.html',
  styleUrls: ['./faturar-produto.component.css']
})
export class FaturarProdutoComponent implements OnInit {

  fatura: Fatura = new Fatura();

  mensagem_erro = '';

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.mensagem_erro = '';
  }

  faturarProduto(){
    this.router.navigate(['produto-faturado']);
  }

  cancelar(){
    this.router.navigate(['menu']);
  }
}
