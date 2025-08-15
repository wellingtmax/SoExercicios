import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../service/login.service';

@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  login: string = '';
  senha: string = '';
  errorMessage: string = '';
  isLoading: boolean = false;

  constructor(
    private loginService: LoginService,
    private router: Router
  ) {}

  onSubmit(): void {
    if (!this.login || !this.senha) {
      this.errorMessage = 'Por favor, preencha todos os campos';
      return;
    }

    this.isLoading = true;
    this.errorMessage = '';

    this.loginService.login(this.login, this.senha).subscribe({
      next: (response) => {
        console.log('Login - Resposta do servidor:', response);
        this.loginService.setToken(response.token, response.role);
        console.log('Login - Token e role salvos. Role:', response.role);

        // Redirecionar baseado no role
        if (response.role === 'admin' || response.role === 'adm') {
          console.log('Login - Redirecionando admin para /admin');
          this.router.navigate(['/admin']);
        } else if (response.role === 'user') {
          console.log('Login - Redirecionando user para /user');
          this.router.navigate(['/user']);
        }
      },
      error: (error) => {
        this.isLoading = false;
        if (error.status === 401) {
          this.errorMessage = 'Login ou senha incorretos';
        } else {
          this.errorMessage = 'Erro no servidor. Tente novamente.';
        }
        console.error('Erro no login:', error);
      }
    });
  }
}
