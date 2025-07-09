import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { ProdutosServiceService } from '../service/produtos-service.service';

// Guard básico para proteger rotas que precisam de produtos carregados
export const produtoGuardGuard: CanActivateFn = (route, state) => {
  const produtosService = inject(ProdutosServiceService);
  const router = inject(Router);

  console.log('🛡️ Guard: Verificando acesso à rota:', state.url);

  // Verificar se há produtos carregados
  if (produtosService.produtos && produtosService.produtos.length > 0) {
    console.log('✅ Guard: Produtos carregados, acesso permitido');
    return true;
  }

  // Se não há produtos, redirecionar para página inicial
  console.log('❌ Guard: Nenhum produto encontrado, redirecionando...');
  router.navigate(['/']);
  return false;
};
