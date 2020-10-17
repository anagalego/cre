import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Produto } from '../models/produto';

@Component({
  selector: 'app-produto-faturado',
  templateUrl: './produto-faturado.component.html',
  styleUrls: ['./produto-faturado.component.css']
})
export class ProdutoFaturadoComponent implements OnInit {

  produto: Produto = new Produto();

  constructor(private router: Router) { }

  ngOnInit() {
    this.produto.id = localStorage.getItem('id-produto');
    this.produto.categoria = localStorage.getItem('categoria-produto');
    this.produto.cor = localStorage.getItem('cor-produto');
<<<<<<< HEAD
    this.produto.pvp = JSON.parse(localStorage.getItem('pvp-produto'));
    this.produto.data = localStorage.getItem('data-produto');
  }

  ok() {
    this.router.navigate(['menu']);
  }

=======
    this.produto.pvp = localStorage.getItem('pvp-produto');
    this.produto.data = localStorage.getItem('data-produto');
  }

>>>>>>> deaf0f56abcde25a8002527604ce5cb329fb053d
}
