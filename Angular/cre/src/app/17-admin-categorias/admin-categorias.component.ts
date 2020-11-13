import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { Categoria } from '../models/categoria';
import { ListarCategoriasService } from '../servicos/categorias/listar-categorias.service';

@Component({
  selector: 'app-admin-categorias',
  templateUrl: './admin-categorias.component.html',
  styleUrls: ['./admin-categorias.component.css']
})
export class AdminCategoriasComponent implements OnInit {
 
  appComponent: AppComponent;
  
  listaCategorias: Categoria[] = Categoria[100]; 

  constructor(private router: Router, private listarCategorias: ListarCategoriasService) { }

  ngOnInit(){
    this.listarCategorias.listarCategorias().subscribe(categorias => this.listaCategorias = categorias);
  }

  novaCategoria() {
    this.router.navigate(['admin-criar-categoria']);
  }

  cancelar() {
    console.log('admin-menu');
  }

}

