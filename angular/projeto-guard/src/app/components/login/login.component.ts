import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  usuario = ''
  senha = ''
  erro = false

  constructor(private auth: AuthService, private rotas: Router){}

  entrar(){
    this.erro = false; // Limpa o erro antes de tentar fazer login
    if(this.auth.login(this.usuario, this.senha)){
      this.rotas.navigate(['/home'])
    } else {
      this.erro = true
    }
  }

  // Limpa o erro quando o usuário começar a digitar
  limparErro(){
    this.erro = false;
  }
}
