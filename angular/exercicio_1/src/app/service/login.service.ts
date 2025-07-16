import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  // private readonly usuario = 'J.Oliveira@admin.com';
  // private readonly senha = '123';

  // login(email: string, password: string): boolean {
  //   // return email === this.usuario && password === this.senha;
  // }



  auth(formLogin:any){
    const senha = localStorage.getItem('senha')
    const email = localStorage.getItem('email')


    if(formLogin.senha == senha && formLogin.email == email){
      return true
    }else{
      return false
    }

  }


}

