import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './01-login/login.component';
import { MenuComponent } from './02-menu/menu.component';
import { CriarProdutoComponent } from './03-criar-produto/criar-produto.component';
import { ProdutoCriadoComponent } from './04-produto-criado/produto-criado.component';

import { ProdutosComponent } from './05-produtos/produtos.component';
import { EliminarProdutoComponent } from './06-eliminar-produto/eliminar-produto.component';
import { FaturarProdutoComponent } from './07-faturar-produto/faturar-produto.component';
import { ProdutoFaturadoComponent } from './08-produto-faturado/produto-faturado.component';
import { ProdutoEliminadoComponent } from './09-produto-eliminado/produto-eliminado.component'; 

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'criar-produto', component: CriarProdutoComponent },
  { path: 'produto-criado', component: ProdutoCriadoComponent },
  { path: 'produtos', component: ProdutosComponent },
  { path: 'eliminar-produto', component: EliminarProdutoComponent },
  { path: 'faturar-produto', component: FaturarProdutoComponent },
  { path: 'produto-faturado', component: ProdutoFaturadoComponent },
  { path: 'produto-eliminado', component: ProdutoEliminadoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
