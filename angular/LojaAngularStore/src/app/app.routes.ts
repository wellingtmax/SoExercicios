import { Routes } from '@angular/router';
import { ProdutosComponent } from './components/produtos/produtos.component';
import { ContatosComponent } from './components/contatos/contatos.component';
import { RedesSociaisComponent } from './components/redes-sociais/redes-sociais.component';
import { PessoasComponent } from './components/pessoas/pessoas.component';
import { VitrineComponent } from './components/vitrine/vitrine.component';
import { CarrinhoComponent } from './components/carrinho/carrinho.component';

// Guards básicos
import { produtoGuardGuard } from './guards/produto-guard.guard';
import { vitrineGuard } from './guards/vitrine.guard';
import { carrinhoGuard } from './guards/carrinho.guard';

export const routes: Routes = [
  // Rota padrão - exibe os produtos
  { path: '', component: ProdutosComponent },
  
  // Rota para produtos com guard básico
  { 
    path: 'produtos',
    component: ProdutosComponent,
    canActivate: [produtoGuardGuard]
  },
  
  // Rota para contato
  { path: 'contato', component: ContatosComponent },
  
  // Rota para redes sociais
  { path: 'redes-sociais', component: RedesSociaisComponent },
  
  // Rota para pessoas
  { path: 'pessoas', component: PessoasComponent },
  
  // Rota para vitrine com guard que verifica produto selecionado
  { 
    path: 'vitrine', 
    component: VitrineComponent,
    canActivate: [vitrineGuard]
  },
  
  // Rota para carrinho com guard básico
  { 
    path: 'carrinho', 
    component: CarrinhoComponent,
    canActivate: [carrinhoGuard]
  }
];
