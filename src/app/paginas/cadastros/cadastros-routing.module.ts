import { PessoaEditarComponent } from './pessoa/components/pessoa-editar/pessoa-editar.component';
import { PessoaComponent } from './pessoa/pessoa.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PessoaRegistrarComponent } from './pessoa/components/pessoa-registrar/pessoa-registrar.component';

const routes: Routes = [
  {path: 'pessoa', component: PessoaComponent},
  {path: 'pessoa/registrar', component: PessoaRegistrarComponent},
  {path: 'pessoa/editar/:id', component: PessoaEditarComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CadastroRoutingModule { }
