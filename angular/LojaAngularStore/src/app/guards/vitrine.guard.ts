import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { ProdutosServiceService } from '../service/produtos-service.service';

// Guard para proteger a rota da vitrine - verifica se há produto selecionado
export const vitrineGuard: CanActivateFn = (route, state) => {
  const produtosService = inject(ProdutosServiceService);
  const router = inject(Router);

  console.log('🛡️ Vitrine Guard: Verificando produto selecionado');

  // Verificar se há um produto sendo visualizado
  if (produtosService.produtoSendoVisto && produtosService.produtoSendoVisto.nome) {
    console.log('✅ Vitrine Guard: Produto selecionado:', produtosService.produtoSendoVisto.nome);
    return true;
  }

  // Se não há produto selecionado, redirecionar para produtos
  console.log('❌ Vitrine Guard: Nenhum produto selecionado, redirecionando para produtos');
  router.navigate(['/']);
  return false;
};
