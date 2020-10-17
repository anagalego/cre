import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Fatura } from '../models/fatura';
<<<<<<< HEAD
import { Produto } from '../models/produto';
=======
>>>>>>> deaf0f56abcde25a8002527604ce5cb329fb053d

@Component({
  selector: 'app-faturar-produto',
  templateUrl: './faturar-produto.component.html',
  styleUrls: ['./faturar-produto.component.css']
})
export class FaturarProdutoComponent implements OnInit {

<<<<<<< HEAD
  produto: Produto = new Produto();

=======
>>>>>>> deaf0f56abcde25a8002527604ce5cb329fb053d
  fatura: Fatura = new Fatura();

  mensagem_erro = '';

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.mensagem_erro = '';
<<<<<<< HEAD
    localStorage.setItem('produto-faturado-id', this.produto.id);
=======
>>>>>>> deaf0f56abcde25a8002527604ce5cb329fb053d
  }

  faturarProduto(){
    this.router.navigate(['produto-faturado']);
  }

  cancelar(){
    this.router.navigate(['menu']);
  }
}
