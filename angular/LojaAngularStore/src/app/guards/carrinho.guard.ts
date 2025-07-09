import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { CarrinhoService } from '../service/carrinho.service';

// Guard básico para a página do carrinho
// Permite acesso sempre, mas mostra log do estado do carrinho
export const carrinhoGuard: CanActivateFn = (route, state) => {
  const carrinhoService = inject(CarrinhoService);

  console.log('🛡️ Carrinho Guard: Verificando acesso ao carrinho');

  const quantidadeItens = carrinhoService.obterQuantidadeTotal();
  const valorTotal = carrinhoService.obterValorTotal();

  if (quantidadeItens > 0) {
    console.log(`✅ Carrinho Guard: ${quantidadeItens} itens no carrinho (R$ ${valorTotal.toFixed(2)})`);
  } else {
    console.log('ℹ️ Carrinho Guard: Carrinho vazio, mas acesso permitido');
  }

  // Sempre permite acesso (carrinho pode estar vazio)
  return true;
};
