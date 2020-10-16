import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Produto } from '../models/produto';

@Component({
  selector: 'app-eliminar-produto',
  templateUrl: './eliminar-produto.component.html',
  styleUrls: ['./eliminar-produto.component.css']
})
export class EliminarProdutoComponent implements OnInit {

  produto: Produto = new Produto();
  
  constructor(private router: Router) { }

  ngOnInit() {
  }

  eliminarProduto() {
    this.router.navigate(['menu']);
  }

  cancelar() {
    this.router.navigate(['produtos']);
  }

}
