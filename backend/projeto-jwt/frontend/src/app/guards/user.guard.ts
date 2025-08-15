import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { LoginService } from '../service/login.service';

export const userGuard: CanActivateFn = (route, state) => {
  const loginService = inject(LoginService);
  const router = inject(Router);

  console.log('UserGuard - Verificando acesso user');
  console.log('UserGuard - isLoggedIn:', loginService.isLoggedIn());
  console.log('UserGuard - role:', loginService.getRole());
  console.log('UserGuard - isUser:', loginService.isUser());

  if (loginService.isUser()) {
    console.log('UserGuard - Acesso permitido para user');
    return true;
  } else {
    console.log('UserGuard - Acesso negado, redirecionando para login');
    router.navigate(['/login']);
    return false;
  }
};
