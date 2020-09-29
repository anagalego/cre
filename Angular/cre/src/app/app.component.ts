import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cre';

  voltar: HTMLElement;

  mostrar() {
    this.voltar = document.getElementById('voltar');
    this.voltar.className = 'esconder';
  }

  voltarAtras(){
  }
}
