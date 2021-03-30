import { PessoaRegistrarViewModel } from './../../models/pessoa-registrar.view-model';
import { PessoaService } from './../../pessoa.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pessoa-registrar',
  templateUrl: './pessoa-registrar.component.html'
})
export class PessoaRegistrarComponent implements OnInit {

  formGroup: FormGroup;
  erros: string[] =[];
  constructor(private formBuilder: FormBuilder, private service: PessoaService, private rota: Router) {

    //inicializa e configura o formulario
    this.formGroup = formBuilder.group({
      nome: this.formBuilder.control(''),
      telefone: this.formBuilder.control('')
    });

   }

  ngOnInit(): void {
  }

  submeter(): void {
    const nome = this.formGroup.controls.nome.value;
    const telefone = this.formGroup.controls.telefone.value;

    const pessoaRegistrarViewModel = new PessoaRegistrarViewModel(nome, telefone);
    this.service.registrar(pessoaRegistrarViewModel).subscribe(
      (resultado) => this._sucesso(resultado),
      (error: any) => this._erro(error)
    );
  }

  private _sucesso(resultado: any): void {
    this.rota.navigateByUrl('/cadastros/pessoa');
  }

  private _erro(erroHttp: any): void {
    console.log(erroHttp);
    this.erros = erroHttp.error.erros;
  }
}
