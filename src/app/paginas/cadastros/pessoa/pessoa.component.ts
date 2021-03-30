import { PessoaService } from './pessoa.service';
import { Component, OnInit } from '@angular/core';
import { PessoaViewModel } from './models/pessoa.view-model';

@Component({
  selector: 'app-pessoa',
  templateUrl: './pessoa.component.html',
  styleUrls: ['./pessoa.component.scss']
})
export class PessoaComponent implements OnInit {

  pessoas: PessoaViewModel[] = [];
  constructor(private pessoaService: PessoaService) { }

  ngOnInit() {
    this.pessoaService.buscarTodos().subscribe(pessoas => this.pessoas = pessoas);
  }

}
