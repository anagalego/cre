import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { Funcionario } from '../models/funcionario';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  funcionario: Funcionario = new Funcionario();

  constructor() { }

  ngOnInit(): void {
  }

}
