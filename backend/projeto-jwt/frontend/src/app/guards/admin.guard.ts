import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { LoginService } from '../service/login.service';

export const adminGuard: CanActivateFn = (route, state) => {
  const loginService = inject(LoginService);
  const router = inject(Router);

  console.log('AdminGuard - Verificando acesso admin');
  console.log('AdminGuard - isLoggedIn:', loginService.isLoggedIn());
  console.log('AdminGuard - role:', loginService.getRole());
  console.log('AdminGuard - isAdmin:', loginService.isAdmin());

  if (loginService.isAdmin()) {
    console.log('AdminGuard - Acesso permitido para admin');
    return true;
  } else {
    console.log('AdminGuard - Acesso negado, redirecionando para login');
    router.navigate(['/login']);
    return false;
  }
};
