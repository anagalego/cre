import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { FormsModule } from '@angular/forms';
import { CriarProdutoComponent } from './criar-produto/criar-produto.component';
import { ProdutoCriadoComponent } from './produto-criado/produto-criado.component';
import { CriarFaturaComponent } from './criar-fatura/criar-fatura.component';
import { ProdutoAnuladoComponent } from './produto-anulado/produto-anulado.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenuComponent,
    CriarProdutoComponent,
    ProdutoCriadoComponent,
    CriarFaturaComponent,
    ProdutoAnuladoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
