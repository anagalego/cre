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
import { AdminMenuComponent } from './10-admin-menu/admin-menu.component';
import { AdminProdutosEquipaComponent } from './11-admin-produtos-equipa/admin-produtos-equipa.component';
import { AdminCriarFuncionarioComponent } from './12-admin-criar-funcionario/admin-criar-funcionario.component';
import { AdminFuncionarioCriadoComponent } from './13-admin-funcionario-criado/admin-funcionario-criado.component';
import { AdminFuncionariosComponent } from './14-admin-funcionarios/admin-funcionarios.component';
import { AdminCriarCategoriaComponent } from './15-admin-criar-categoria/admin-criar-categoria.component';
import { AdminCategoriasComponent } from './17-admin-categorias/admin-categorias.component';
import { AdminCriarCorComponent } from './18-admin-criar-cor/admin-criar-cor.component';
import { AdminCorCriadaComponent } from './19-admin-cor-criada/admin-cor-criada.component';
import { AdminCoresComponent } from './20-admin-cores/admin-cores.component';

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
  { path: 'produto-eliminado', component: ProdutoEliminadoComponent },

  { path: 'admin-menu', component: AdminMenuComponent },
  { path: 'admin-produtos-equipa', component: AdminProdutosEquipaComponent },
  { path: 'admin-produtos-funcionario', component: AdminCriarFuncionarioComponent },
  { path: 'admin-criar-funcionario', component: AdminCriarFuncionarioComponent },
  { path: 'admin-funcionario-criado', component: AdminFuncionarioCriadoComponent },
  { path: 'admin-funcionarios', component: AdminFuncionariosComponent },
  { path: 'admin-criar-categoria', component: AdminCriarCategoriaComponent },
  { path: 'admin-categoria-criada', component: AdminCriarCategoriaComponent },
  { path: 'admin-categorias', component: AdminCategoriasComponent },
  { path: 'admin-criar-cor', component: AdminCriarCorComponent },
  { path: 'admin-cor-criada', component: AdminCorCriadaComponent },
  { path: 'admin-cores', component: AdminCoresComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
