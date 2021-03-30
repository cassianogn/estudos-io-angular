import { PessoaService } from './../../pessoa.service';
import { Component, OnInit } from '@angular/core';
import { PessoaRegistrarViewModel } from '../../models/pessoa-registrar.view-model';
import { ActivatedRoute, Router } from '@angular/router';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-pessoa-editar',
  templateUrl: './pessoa-editar.component.html'
})
export class PessoaEditarComponent implements OnInit {

  pessoaEditar: PessoaRegistrarViewModel | undefined;
  erros: string[] =[];
  pessoaId: string;
  formGroup: FormGroup;
  constructor(private pessoaService: PessoaService, private rotaAtiva: ActivatedRoute, private formBuilder: FormBuilder, private rota: Router) {

    //inicializa e configura o formulario
    this.formGroup = formBuilder.group({
      nome: this.formBuilder.control(''),
      telefone: this.formBuilder.control('')
    });

    //busca a pessoa a ser editada na API
    this.pessoaId = rotaAtiva.snapshot.params.id;
    pessoaService.buscarPorId(this.pessoaId).subscribe(pessoaEditar => {
      this.pessoaEditar = pessoaEditar;
      this._preencherFormulario();
    });



  }
  private _preencherFormulario() {
    this.formGroup.controls.nome.setValue(this.pessoaEditar?.nome);
    this.formGroup.controls.telefone.setValue(this.pessoaEditar?.telefone);
  }

  ngOnInit(): void {
  }
  submeter(): void {
    const nome = this.formGroup.controls.nome.value;
    const telefone = this.formGroup.controls.telefone.value;

    const pessoaRegistrarViewModel = new PessoaRegistrarViewModel(nome, telefone);

    this.pessoaService.editar(this.pessoaId, pessoaRegistrarViewModel).subscribe(
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
