import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { Fatura } from '../models/fatura';
import { FaturarProdutoService } from '../servicos/faturas/faturar-produto.service';

@Component({
  selector: 'app-faturar-produto',
  templateUrl: './faturar-produto.component.html',
  styleUrls: ['./faturar-produto.component.css']
})
export class FaturarProdutoComponent implements OnInit {

  appComponent: AppComponent;
  fatura: Fatura = new Fatura();
  mensagem_erro = '';

  constructor(private router: Router, private faturarProduto: FaturarProdutoService) { }

  ngOnInit(): void {
    this.mensagem_erro = '';
    this.fatura.idProduto = sessionStorage.getItem('produto-id');
  }

  novaFatura(){
    this.router.navigate(['produto-faturado']);
  }

  cancelar(){
    this.router.navigate(['menu']);
  }
}
