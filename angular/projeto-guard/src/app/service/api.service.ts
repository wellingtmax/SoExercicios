import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private url = 'https://jsonplaceholder.typicode.com/users'

   constructor(private http: HttpClient) { }

  getUsuario(): Observable<any[]>{
    return this.http.get<any[]>(this.url)
  }


 

}
