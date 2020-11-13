import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { Cor } from '../models/cor';
import { ListarCoresService } from '../servicos/cores/listar-cores.service';

@Component({
  selector: 'app-admin-cores',
  templateUrl: './admin-cores.component.html',
  styleUrls: ['./admin-cores.component.css']
})
export class AdminCoresComponent implements OnInit {

  appComponent: AppComponent;
  listaCores: Cor[] = Cor[100]; 

  constructor(private router: Router, private listarCores: ListarCoresService) { }

  ngOnInit(){
    this.listarCores.listarCores().subscribe(cores => this.listaCores = cores);
  }

  novaCor() {
    this.router.navigate(['admin-criar-cor']);
  }

  cancelar() {
    console.log('admin-menu');
  }


}
