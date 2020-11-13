import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { Produto } from '../models/produto';
import { EliminarProdutoService } from '../servicos/produtos/eliminar-produto.service';

@Component({
  selector: 'app-eliminar-produto',
  templateUrl: './eliminar-produto.component.html',
  styleUrls: ['./eliminar-produto.component.css']
})
export class EliminarProdutoComponent implements OnInit {

  appComponent: AppComponent;
  produto: Produto = new Produto();
  
  constructor(private router: Router, private eliminarProdutoService: EliminarProdutoService) { }

  ngOnInit() {
    this.produto.id = sessionStorage.getItem('');

    this.eliminarProdutoService.eliminarProduto(this.produto).subscribe(produtoAEliminar => {
      this.produto = produtoAEliminar;
    });  
  }

  eliminarProduto() {
    this.router.navigate(['produto-eliminado']);
  }

  cancelar() {
    this.router.navigate(['produtos']);
  }

}
