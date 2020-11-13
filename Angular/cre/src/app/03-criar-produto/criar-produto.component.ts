import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { Categoria } from '../models/categoria';
import { Cor } from '../models/cor';
import { Produto } from '../models/produto';
import { ListarCategoriasService } from '../servicos/categorias/listar-categorias.service';
import { ListarCoresService } from '../servicos/cores/listar-cores.service';
import { CriarProdutoService } from '../servicos/produtos/criar-produto.service';

@Component({
  selector: 'app-criar-produto',
  templateUrl: './criar-produto.component.html',
  styleUrls: ['./criar-produto.component.css']
})
export class CriarProdutoComponent implements OnInit {

  appComponent: AppComponent;
  
  produto: Produto;
  mensagem_erro: string = '';

  listaCategorias: Categoria[];
  listaCores: Cor[];

  display = false;

  constructor(private router: Router,
    private criarProduto: CriarProdutoService,
    private listarCategorias: ListarCategoriasService,
    private listarCores: ListarCoresService) { }

  ngOnInit() {
    this.listarCategorias.listarCategorias().subscribe(categorias => this.listaCategorias = categorias);
    this.listarCores.listarCores().subscribe(cores => {
      this.listaCores = cores;
    });


    this.produto.funcionario = sessionStorage.getItem('id');
    this.produto.data = new Date().toLocaleString("yyyy/MM/dd");
    sessionStorage.setItem('produto-data', this.produto.data);
    
  }

  toggleLista() {
    this.display = !this.display;
  }

  
  criar() {
    this.criarProduto.adicionarProduto(this.produto).subscribe(resultado => {
      if(resultado.sucesso == false) {
        this.mensagem_erro = 'Tente novamente.';

      } else {
        sessionStorage.setItem('produto-id', this.produto.id);
        sessionStorage.setItem('produto-categoria', this.produto.categoria);
        sessionStorage.setItem('produto-cor', this.produto.cor);
        sessionStorage.setItem('produto-quantidade', JSON.stringify(this.produto.quantidade));

        this.router.navigate(['produto-criado']);
      }    
    });
    

  }

  cancelar() {
    this.router.navigate(['menu']);
  }

}

