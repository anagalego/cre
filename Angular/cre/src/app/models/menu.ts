import { renderFlagCheckIfStmt } from '@angular/compiler/src/render3/view/template';
import { Produto } from './produto';

export class Menu {
    constructor(private container: HTMLUListElement) {}
    
    render(item: Produto[]){
        

        for (var i = 0; i < item.length; i++) {
            var li = document.createElement('li');

            var spanData = document.createElement('span');
            spanData.className = 'data';
            spanData.innerText = item[i].data;

            var spanCategoria = document.createElement('span');
            spanCategoria.className = 'categoria';
            spanCategoria.innerText = item[i].categoria;

            var spanCor = document.createElement('span');
            spanCor.className = 'cor';
            spanCor.innerText = item[i].cor;

            var spanFuncionario = document.createElement('span');
            spanFuncionario.className = 'funcionario';
            spanFuncionario.innerText = item[i].funcionario.login.id;


            li.appendChild(spanData);
            li.appendChild(spanCategoria);
            li.appendChild(spanCor);
            li.appendChild(spanFuncionario); 
        }

        
    }
    
}