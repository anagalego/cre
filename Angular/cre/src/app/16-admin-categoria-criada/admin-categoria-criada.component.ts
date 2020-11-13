import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { Categoria } from '../models/categoria';

@Component({
  selector: 'app-admin-categoria-criada',
  templateUrl: './admin-categoria-criada.component.html',
  styleUrls: ['./admin-categoria-criada.component.css']
})
export class AdminCategoriaCriadaComponent implements OnInit {

  appComponent: AppComponent;
  categoria: Categoria = new Categoria();
  
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  ok() {
    this.router.navigate(['menu']);
  }

}
