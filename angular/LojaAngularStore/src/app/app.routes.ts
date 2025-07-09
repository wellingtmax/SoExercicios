import { Routes } from '@angular/router';
import { ProdutosComponent } from './components/produtos/produtos.component';
import { ContatosComponent } from './components/contatos/contatos.component';

// Vou criar o componente de redes sociais
import { RedesSociaisComponent } from './components/redes-sociais/redes-sociais.component';
import { PessoasComponent } from './components/pessoas/pessoas.component';
import { VitrineComponent } from './components/vitrine/vitrine.component';
import { CarrinhoComponent } from './components/carrinho/carrinho.component';
import { produtoGuardGuard } from './guards/produto-guard.guard';

export const routes: Routes = [
  // Rota padrão - exibe os produtos
  { path: '', component: ProdutosComponent },
  // Rota para produtos (mesmo que a padrão)
  { path: 'produtos',
    component: ProdutosComponent ,
    canActivate: [produtoGuardGuard]
  },
  // Rota para contato
  { path: 'contato', component: ContatosComponent },
  // Rota para redes sociais
  { path: 'redes-sociais', component: RedesSociaisComponent },
  // Rota para pessoas
  { path: 'pessoas', component: PessoasComponent },
  // rota produtos visto
  { path: 'vitrine', component: VitrineComponent},
  // Rota para carrinho
  { path: 'carrinho', component: CarrinhoComponent }
];
