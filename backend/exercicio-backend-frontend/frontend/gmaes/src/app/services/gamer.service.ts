import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


export interface Game{
  id:number;
  nome:string;
  tipo:string;
  ano:number;
  imagem:string;
 }


@Injectable({
  providedIn: 'root'
})


export class GamerService {

 private apiUrl = 'http://localhost:3000/api/games';

  constructor(private http: HttpClient) { }

  getGames(): Observable<Game[]> {
   return this.http.get<Game[]>(this.apiUrl);
  }

  getGamer(id: number): Observable<Game> {
   return this.http.get<Game>(`${this.apiUrl}/${id}`);
  }

  putGamer(id: number, game: Game): Observable<Game> {
    console.log('Enviando PUT para:', `${this.apiUrl}/${id}`);
    console.log('Dados sendo enviados:', game);
    return this.http.put<Game>(`${this.apiUrl}/${id}`, game);
  }

  postGamer(game: Game): Observable<Game> {
   return this.http.post<Game>(this.apiUrl, game);
  }

  delGamer(id: number): Observable<void> {
   return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

}
