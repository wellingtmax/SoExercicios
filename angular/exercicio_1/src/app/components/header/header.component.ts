import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';




@Component({
  selector: 'app-header',
  imports: [RouterLink, CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})


export class HeaderComponent {
  constructor(private router: Router) {}

  get isLoginPage(): boolean {
    return this.router.url === '/login';
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/']);
  }

  get isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  get isServicoPage(): boolean {
    return this.router.url === '/servico' || this.router.url === '/';
  }
}
