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
import { AdminMenuComponent } from './10-admin-menu/admin-menu.component';
import { AdminProdutosEquipaComponent } from './11-admin-produtos-equipa/admin-produtos-equipa.component';
import { AdminCriarFuncionarioComponent } from './12-admin-criar-funcionario/admin-criar-funcionario.component';
import { AdminFuncionarioCriadoComponent } from './13-admin-funcionario-criado/admin-funcionario-criado.component';
import { AdminFuncionariosComponent } from './14-admin-funcionarios/admin-funcionarios.component';
import { AdminCriarCategoriaComponent } from './15-admin-criar-categoria/admin-criar-categoria.component';
import { AdminCategoriaCriadaComponent } from './16-admin-categoria-criada/admin-categoria-criada.component';
import { AdminCategoriasComponent } from './17-admin-categorias/admin-categorias.component';
import { AdminCriarCorComponent } from './18-admin-criar-cor/admin-criar-cor.component';
import { AdminCorCriadaComponent } from './19-admin-cor-criada/admin-cor-criada.component';
import { AdminCoresComponent } from './20-admin-cores/admin-cores.component';


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
    ProdutoEliminadoComponent,
    AdminMenuComponent,
    AdminProdutosEquipaComponent,
    AdminCriarFuncionarioComponent,
    AdminFuncionarioCriadoComponent,
    AdminFuncionariosComponent, 
    AdminCriarCategoriaComponent,
    AdminCategoriaCriadaComponent,
    AdminCategoriasComponent,
    AdminCriarCorComponent,
    AdminCorCriadaComponent,
    AdminCoresComponent
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
