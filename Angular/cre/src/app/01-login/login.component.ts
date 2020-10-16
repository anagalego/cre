import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from '../models/login';
import { AutenticacaoService } from '../servicos/autenticacao.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {

  login: Login = new Login();

  mensagem_erro = '';

  constructor(private router: Router, private autenticaServico: AutenticacaoService) { }

  ngOnInit() {
    this.mensagem_erro = '';
  }

  doEntrar() {
    this.autenticaServico.autentica(this.login).subscribe(resultado => {

      if(resultado.sucesso == false) {
        this.mensagem_erro = 'Palavra-passe incorreta. </br>Tente novamente.';
      } else {
        
        localStorage.setItem('id', resultado.conteudo.nome);
        localStorage.setItem('login-id', resultado.conteudo.id);
        this.irParaFuncionarios();
        this.mensagem_erro = '';
        return;
      }
    });    
  }

  irParaFuncionarios(){
    this.router.navigate(['menu']);
  }

  recuperarPalavraPasse(){
    console.log('Recuperar palavra-passe.');
  }
}
