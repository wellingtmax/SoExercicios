import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  imports: [CommonModule, FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  registerData = {
    usuario: '',
    senha: '',
    confirmarSenha: '',
    perfil: 'user'
  };

  loading = false;
  errorMessage = '';
  successMessage = '';

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  onRegister(): void {
    // Validações
    if (!this.registerData.usuario || !this.registerData.senha || !this.registerData.confirmarSenha) {
      this.errorMessage = 'Preencha todos os campos';
      return;
    }

    if (this.registerData.senha !== this.registerData.confirmarSenha) {
      this.errorMessage = 'As senhas não coincidem';
      return;
    }

    if (this.registerData.senha.length < 3) {
      this.errorMessage = 'A senha deve ter pelo menos 3 caracteres';
      return;
    }

    this.loading = true;
    this.errorMessage = '';
    this.successMessage = '';

    // Dados para enviar (sem confirmarSenha)
    const dataToSend = {
      usuario: this.registerData.usuario,
      senha: this.registerData.senha,
      perfil: this.registerData.perfil
    };

    this.authService.register(dataToSend).subscribe({
      next: (response) => {
        console.log('Registro realizado com sucesso:', response);
        this.successMessage = 'Usuário registrado com sucesso! Redirecionando...';
        this.loading = false;

        // Redirecionar para login após 2 segundos
        setTimeout(() => {
          this.router.navigate(['/login']);
        }, 2000);
      },
      error: (error) => {
        console.error('Erro no registro:', error);
        this.errorMessage = error.error?.message || 'Erro ao registrar usuário';
        this.loading = false;
      }
    });
  }

  goToLogin(): void {
    this.router.navigate(['/login']);
  }
}
