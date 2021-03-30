import { PessoaRegistrarViewModel } from './models/pessoa-registrar.view-model';
import { PessoaViewModel } from './models/pessoa.view-model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {


  private baseApi = '';
  constructor(private httpService: HttpClient) { }

  buscarTodos(): Observable<PessoaViewModel[]> {
    return this.httpService.get<PessoaViewModel[]>('https://localhost:44397/api/Pessoa');
  }
  buscarPorId(id: string): Observable<PessoaRegistrarViewModel> {
    return this.httpService.get<PessoaRegistrarViewModel>('https://localhost:44397/api/Pessoa/'+ id);
  }
  registrar(pessoaRegistrar: PessoaRegistrarViewModel): Observable<any> {
    return this.httpService.post<any>('https://localhost:44397/api/Pessoa', pessoaRegistrar);
  }
  editar(pessoaEditarId: string, pessoaRegistrarViewModel: PessoaRegistrarViewModel): Observable<any> {
    return this.httpService.put<any>('https://localhost:44397/api/Pessoa/' + pessoaEditarId, pessoaRegistrarViewModel);
  }



}
