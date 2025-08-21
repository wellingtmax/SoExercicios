import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { AlertsService } from '../../services/alerts.service';

@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginData = {
    usuario: '',
    senha: ''
  };

  loading = false;
  errorMessage = '';

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  alertsService = inject(AlertsService);

  onLogin(): void {
    if (!this.loginData.usuario || !this.loginData.senha) {
      this.alertsService.addTemporalAlert('Usuário ou senha inválidos', 'error', 3000);
      this.loading = false;
      return;
    }

    this.loading = true;
    this.errorMessage = '';

    this.authService.login(this.loginData).subscribe({
      next: (response) => {
        console.log('Login realizado com sucesso:', response);

        // Redirecionar baseado no perfil do usuário
        if (response.user.perfil === 'admin' || response.user.perfil === 'administrativo') {
          this.router.navigate(['/admin']);
        } else {
          this.router.navigate(['/user']);
        }
      },
      error: (err) => {
        this.alertsService.addTemporalAlert('Usuário ou senha inválidos', 'error', 5000);
        this.loading = false;
      }
    });
  }

  goToRegister(): void {
    this.router.navigate(['/register']);
  }
  goToHome(): void {
    this.router.navigate(['/home']);
  }
}
