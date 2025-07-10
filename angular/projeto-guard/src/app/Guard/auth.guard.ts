import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { inject } from '@angular/core';



export const authGuard: CanActivateFn = (route, state) => {
  const auth = inject(AuthService);
  const router = inject(Router);

  if (!auth.isAutenticado()){
    //redireciona para a pagina de login se nao estiver
    router.navigate(['login']);
    return false;
  }

  return true;
};
