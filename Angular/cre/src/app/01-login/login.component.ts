import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { Login } from '../models/login';
import { AutenticacaoService } from '../servicos/autenticacao/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {


  appComponent: AppComponent;

  login: Login = new Login();

  mensagem_erro: string;

  

  constructor(private router: Router, private autenticaServico: AutenticacaoService) { }

  ngOnInit() {
    this.mensagem_erro = '';
  }

  entrar() {
    this.autenticaServico.autentica(this.login).subscribe(resultado => {

      if(resultado.sucesso == false) {
        this.mensagem_erro = 'Tente novamente.';
      } else {
        sessionStorage.setItem('nome', resultado.conteudo.nome);
        sessionStorage.setItem('id', resultado.conteudo.id);
        
        this.irParaMenu();
        this.darBoasVindas();
        
        this.mensagem_erro = '';
      }
    }); 
    return;   
  }

  irParaMenu() {
    this.autenticaServico.autentica(this.login).subscribe(resultado => {
      if(resultado.conteudo.admin == true) {
        this.router.navigate(['admin-menu']);
      } else {
        this.router.navigate(['menu']);
      }   
    });
    return;
  }

  darBoasVindas() {
    this.autenticaServico.autentica(this.login).subscribe(resultado => {
      if(resultado.conteudo.feminino == true) {
        sessionStorage.setItem('boas-vindas', 'Bem-vinda');
      } else {
        sessionStorage.setItem('boas-vindas', 'Bem-vindo');
      }    
    });
    return;
  }

  recuperarPalavraPasse(){
    console.log('Recuperar palavra-passe.');
  }
}
