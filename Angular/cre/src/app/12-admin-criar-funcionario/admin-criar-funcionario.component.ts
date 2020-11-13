import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { Funcionario } from '../models/funcionario';
import { CriarFuncionarioService } from '../servicos/funcionarios/criar-funcionario.service';

@Component({
  selector: 'app-admin-criar-funcionario',
  templateUrl: './admin-criar-funcionario.component.html',
  styleUrls: ['./admin-criar-funcionario.component.css']
})
export class AdminCriarFuncionarioComponent implements OnInit {

  appComponent: AppComponent;
  funcionario: Funcionario = new Funcionario();
  mensagem_erro: string;

  checked: boolean;

  constructor(private router: Router, private criarFuncionario: CriarFuncionarioService) { }

  ngOnInit(): void {
    this.mensagem_erro = '';
    this.funcionario.feminino = false;
    this.funcionario.admin = false;
  }

  criar() {
    this.criarFuncionario.criarFuncionario(this.funcionario).subscribe(resultado => {
      if(resultado.sucesso == false) {
        this.mensagem_erro = 'Tente novamente.';
      } else {
        this.mensagem_erro = '';
        sessionStorage.setItem('funcionario-id', this.funcionario.id);
        sessionStorage.setItem('funcionario-nome', this.funcionario.nome);
        if(this.funcionario.feminino == true) {
          sessionStorage.setItem('funcionario-feminino', 'Sr.ª');
        } else {
          sessionStorage.setItem('funcionario-feminino', 'Sr.');
        }

        if(this.funcionario.admin == true) {
          sessionStorage.setItem('funcionario-admin', 'Administrador');
        } else {
          sessionStorage.setItem('funcionario-admin', 'Funcionário');
        }

        this.funcionarioCriado();
        return;
      }
    })    
  }

  definirFeminino() {
    this.funcionario.feminino = true;
  }

  definirMasculino() {
    this.funcionario.feminino = false;
  }

  definirAdmin() {
    this.funcionario.admin = true;
  }

  funcionarioCriado() {
    this.router.navigate(['admin-funcionario-criado']);
  }

  cancelar() {
    this.router.navigate(['menu']);
  }

}