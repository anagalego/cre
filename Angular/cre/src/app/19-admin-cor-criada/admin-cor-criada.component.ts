import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { Cor } from '../models/cor';

@Component({
  selector: 'app-admin-cor-criada',
  templateUrl: './admin-cor-criada.component.html',
  styleUrls: ['./admin-cor-criada.component.css']
})
export class AdminCorCriadaComponent implements OnInit {

  appComponent: AppComponent;
  cor: Cor = new Cor();

  constructor(private router: Router) { }

  ngOnInit(): void {
    
  }

  ok() {
    this.router.navigate(['menu']);
  }

}
