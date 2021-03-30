import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'cadastros/pessoa', pathMatch: 'full'},
  // avisa qu quando a rota solicitar 'cadastros' será redirecionado para o modulo de cadastros
  {path: 'cadastros', loadChildren: () => import('./paginas/cadastros/cadastros.module').then(modeulo => modeulo.CadastrosModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
