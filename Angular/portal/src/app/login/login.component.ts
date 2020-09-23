import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from '../models/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {

  login: Login = new Login();

  mensagem_erro = '';

  constructor(private router: Router) { }

  ngOnInit() {
    this.mensagem_erro = '';
  }

  doEntrar() {
    if(this.login.username == this.login.password){
      this.irParaFuncionarios();
      this.mensagem_erro = '';
      return;
    }
    this.mensagem_erro = 'tente novamente';
  }

  irParaFuncionarios(){
    this.router.navigate(['produtos']);
  }
}


