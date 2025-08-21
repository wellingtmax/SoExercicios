import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-user',
  imports: [CommonModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})


export class UserComponent implements OnInit {
  user: any = null;
  protectedData: any = null;
  loading = false;
  dataHora: Date = new Date();


  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.user = this.authService.getCurrentUser();
    this.loadProtectedData();

    setInterval(() => {
    this.dataHora = new Date();
  }, 1000);
  }


  loadProtectedData(): void {
    this.loading = true;
    this.authService.getProtectedData().subscribe({
      next: (data) => {
        this.protectedData = data;
        this.loading = false;
      },
      error: (error) => {
        console.error('Erro ao carregar dados protegidos:', error);
        this.loading = false;
      }
    });
  }

  logout(): void {
    this.authService.logout();
    if (confirm('Você tem certeza que deseja sair?')) {
      setTimeout(() => {
        this.router.navigate(['/home']);
      }, 1000);
    }
  }
}
