import { CadastroRoutingModule } from './cadastros-routing.module';
import { PessoaComponent } from './pessoa/pessoa.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PessoaRegistrarComponent } from './pessoa/components/pessoa-registrar/pessoa-registrar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PessoaEditarComponent } from './pessoa/components/pessoa-editar/pessoa-editar.component';

@NgModule({
  imports: [
    CommonModule,
    CadastroRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [
    PessoaComponent,
    PessoaRegistrarComponent,
    PessoaEditarComponent,
  ]
})
export class CadastrosModule { }
