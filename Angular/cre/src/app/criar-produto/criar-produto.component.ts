import { ParsedVariable } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { Produto } from '../models/produto';
@Component({
  selector: 'app-criar-produto',
  templateUrl: './criar-produto.component.html',
  styleUrls: ['./criar-produto.component.css']
})
export class CriarProdutoComponent implements OnInit {

  appComponent: AppComponent;

  produto: Produto = new Produto();

  mensagem_erro = '';
  falta = '';

  elementId: HTMLElement;
  elementCategoria: HTMLElement;
  elementCor: HTMLElement;
  elementPvp: HTMLElement;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.mensagem_erro = '';
    this.falta = '';
  }

  criarProduto(){
    if(this.produto.id != null
      && this.produto.categoria != null
      && this.produto.cor != null
      && this.produto.pvp != null){
        
        this.produto.data = new Date().toLocaleString("yyyy/MM/dd");
        localStorage.setItem('dataCriacao-produto', this.produto.data);
        
        localStorage.setItem('id-produto', this.produto.id);
        localStorage.setItem('categoria-produto', this.produto.categoria);
        localStorage.setItem('cor-produto', this.produto.cor);
        localStorage.setItem('pvp-produto', this.produto.pvp);
        
        this.router.navigate(['produto-criado']);
        return;
    } else {
      if(this.produto.id == null){
        this.elementId = document.getElementById('id');
        this.elementId.className = 'nulo';
        this.falta += 'ID '; }
      if(this.produto.categoria == null){
        this.elementId = document.getElementById('categoria');
        this.elementId.className = 'nulo';
        this.falta += 'Categoria '; }
      if(this.produto.cor == null){
        this.elementId = document.getElementById('cor');
        this.elementId.className = 'nulo';
        this.falta += 'Cor '; }
      if(this.produto.pvp == null){
        this.elementId = document.getElementById('pvp');
        this.elementId.className = 'nulo';
        this.falta += 'PVP '; }
      
      this.mensagem_erro = 'Inserir ' + this.falta + 'do produto.';
    }
    
  }

  voltar(){
    this.router.navigate(['criar-produto']);
  }

}

