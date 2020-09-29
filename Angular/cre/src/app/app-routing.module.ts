import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CriarFaturaComponent } from './criar-fatura/criar-fatura.component';
import { CriarProdutoComponent } from './criar-produto/criar-produto.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { ProdutoCriadoComponent } from './produto-criado/produto-criado.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'criar-produto', component: CriarProdutoComponent },
  { path: 'produto-criado', component: ProdutoCriadoComponent },
  { path: 'criar-fatura', component: CriarFaturaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
