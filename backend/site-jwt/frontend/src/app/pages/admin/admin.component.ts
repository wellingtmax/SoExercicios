import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-admin',
  imports: [CommonModule],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent implements OnInit {
  user: any = null;
  protectedData: any = null;
  loading = false;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.user = this.authService.getCurrentUser();
    this.loadProtectedData();
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
    this.router.navigate(['/login']);
  }
}
