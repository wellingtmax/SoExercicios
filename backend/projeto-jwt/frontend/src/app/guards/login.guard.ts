import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { LoginService } from '../service/login.service';

export const loginGuard: CanActivateFn = (route, state) => {
  const loginService = inject(LoginService);
  const router = inject(Router);

  console.log('LoginGuard - Verificando acesso à página de login');
  console.log('LoginGuard - URL atual:', state.url);

  try {
    // Se já estiver logado E não estiver tentando acessar o login, redireciona
    if (loginService.isLoggedIn() && state.url === '/login') {
      console.log('LoginGuard - Usuário já está logado, redirecionando...');
      if (loginService.isAdmin()) {
        console.log('LoginGuard - Redirecionando admin para /admin');
        router.navigate(['/admin']);
        return false;
      } else if (loginService.isUser()) {
        console.log('LoginGuard - Redirecionando user para /user');
        router.navigate(['/user']);
        return false;
      }
    }

    console.log('LoginGuard - Permitindo acesso ao login');
    return true;
  } catch (error) {
    console.error('LoginGuard - Erro ao verificar login:', error);
    // Em caso de erro, limpar dados e permitir acesso ao login
    loginService.logout();
    return true;
  }
};
