import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { Funcionario } from '../models/funcionario';
import { ListarFuncionariosService } from '../servicos/funcionarios/listar-funcionarios.service';

@Component({
  selector: 'app-admin-funcionarios',
  templateUrl: './admin-funcionarios.component.html',
  styleUrls: ['./admin-funcionarios.component.css']
})
export class AdminFuncionariosComponent implements OnInit {
 
  appComponent: AppComponent;
  listaFuncionarios: Funcionario[] = Funcionario[100]; 


  constructor(private router: Router, private listarFuncionarios: ListarFuncionariosService) { }

  ngOnInit(){
    this.listarFuncionarios.listarFuncionarios().subscribe(funcionarios => this.listaFuncionarios = funcionarios);
  }

  novoFuncionario() {
    this.router.navigate(['admin-criar-categoria']);
  }

  cancelar() {
    console.log('admin-menu');
  }

}

