import { Routes } from '@angular/router';
import { ProdutoListaComponent } from './components/produto-lista/produto-lista.component';
import { ProdutoFormularioComponent } from './components/produto-formulario/produto-formulario.component';

export const routes: Routes =
[
  {path: '', component: ProdutoListaComponent},
  {path: 'novo', component: ProdutoFormularioComponent},
  {path: 'editar/:id', component: ProdutoFormularioComponent}
];
