import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { Cor } from '../models/cor';
import { CriarCorService } from '../servicos/cores/criar-cor.service';

@Component({
  selector: 'app-admin-criar-cor',
  templateUrl: './admin-criar-cor.component.html',
  styleUrls: ['./admin-criar-cor.component.css']
})
export class AdminCriarCorComponent implements OnInit {

  appComponent: AppComponent;
  cor: Cor;
  mensagem_erro: string;

  constructor(private router: Router, private criarCor: CriarCorService) { }

  ngOnInit(): void {
    this.mensagem_erro = '';
  }

  criar() {
    this.criarCor.criarCor(this.cor).subscribe(resultado => {
      if(resultado.sucesso == false) {
        this.mensagem_erro = 'Tente novamente.';
      } else {
        sessionStorage.setItem(this.cor.id, 'cor-id');
        sessionStorage.setItem(this.cor.nome, 'cor-nome');
        sessionStorage.setItem(this.cor.hex, 'cor-hex');
        this.corCriada();
        return;
      }
    })
  }

  corCriada() {
    this.router.navigate(['admin-cor-criada']);
  }

  cancelar() {
    this.router.navigate(['menu']);
  }

}
