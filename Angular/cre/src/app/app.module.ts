import { HttpClientModule } from '@angular/common/http';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { LoginComponent } from './01-login/login.component';
import { MenuComponent } from './02-menu/menu.component';
import { CriarProdutoComponent } from './03-criar-produto/criar-produto.component';
import { ProdutoCriadoComponent } from './04-produto-criado/produto-criado.component';
import { ProdutosComponent } from './05-produtos/produtos.component';
import { EliminarProdutoComponent } from './06-eliminar-produto/eliminar-produto.component';
import { FaturarProdutoComponent } from './07-faturar-produto/faturar-produto.component';
import { ProdutoFaturadoComponent } from './08-produto-faturado/produto-faturado.component';
import { ProdutoEliminadoComponent } from './09-produto-eliminado/produto-eliminado.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenuComponent,
    CriarProdutoComponent,
    ProdutoCriadoComponent,
    ProdutosComponent,
    EliminarProdutoComponent,
    FaturarProdutoComponent,
    ProdutoFaturadoComponent,
    ProdutoEliminadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
