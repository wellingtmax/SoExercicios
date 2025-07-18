import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Produtos } from '../interfaces/produtos';
import { Observable } from 'rxjs';




const API = 'http://localhost:3001/produtos'

@Injectable({
  providedIn: 'root'
})


export class ProdutoServiceService {

  constructor(private http: HttpClient) { }

  lsitar(): Observable<Produtos>{
    return this.http.get<Produtos>(API)
  }

  buscarPoId(id: number, nome: string, preco: number): Observable<Produtos>{
    return this.http.get<Produtos>(`${API}/${id}`)
  }

  criar(produtos: Produtos ): Observable<Produtos>{
    return this.http.post<Produtos>(API, produtos)
  }

  atualizar(produtos: Produtos): Observable<Produtos>{
    return this.http.put<Produtos>(`${API}/${produtos.id}`, produtos)
  }

  excluir(id: number): Observable<any>{
    return this.http.delete(`${API}/${id}`)
  }

}
