import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { Categoria } from '../models/categoria';
import { CriarCategoriaService } from '../servicos/categorias/criar-categoria.service';

@Component({
  selector: 'app-admin-criar-categoria',
  templateUrl: './admin-criar-categoria.component.html',
  styleUrls: ['./admin-criar-categoria.component.css']
})
export class AdminCriarCategoriaComponent implements OnInit {

  appComponent: AppComponent;
  categoria: Categoria = new Categoria();
  mensagem_erro: string;

  constructor(private router: Router, private criarCategoria: CriarCategoriaService) { }

  ngOnInit(): void {
    this.mensagem_erro = '';
  }

  criar() {
    this.criarCategoria.criarCategoria(this.categoria).subscribe(resultado => {
      if(resultado.sucesso == false) {
        this.mensagem_erro = 'Tente novamente.'
      } else {
        sessionStorage.setItem(this.categoria.id, 'categoria-id');
        sessionStorage.setItem(this.categoria.nome, 'categoria-nome');
        var x = new Number(this.categoria.x);
        sessionStorage.setItem(x.toString(), 'categoria-x');
        var y = new Number(this.categoria.y);
        sessionStorage.setItem(y.toString(), 'categoria-y');
        var z = new Number(this.categoria.z);
        sessionStorage.setItem(z.toString(), 'categoria-z');
        var pvp = new Number(this.categoria.pvp);
        sessionStorage.setItem(pvp.toString(), 'categoria-pvp');
        return;
      }
    })
  }


  categoriaCriada() {
    this.router.navigate(['admin-categoria-criada']);
  }

  cancelar() {
    this.router.navigate(['menu']);
  }

}