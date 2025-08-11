import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Usuario{
  id?:number;
  nome:string;
  email:string;
}


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private api = 'http://localhost:3000/api/users'

  constructor(private http: HttpClient) { }

  getUsuarios():Observable<Usuario[]>{
    return this.http.get<Usuario[]>(this.api)
  }



  postAdicionar(usuario: Usuario):Observable<any>{
    return this.http.post<any>(this.api, usuario)
  }



  putAtualizar(id:number, usuario:Usuario):Observable<any>{
    return this.http.put(`${this.api}/${id}`, usuario)
  }



  delDeletar(id:number):Observable<any>{
    return this.http.delete(`${this.api}/${id}`)
  }
}
