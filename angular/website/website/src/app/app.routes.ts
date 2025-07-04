import { Routes } from '@angular/router';
import { HomerComponent } from './pages/homer/homer.component';
import { SobreComponent } from './pages/sobre/sobre.component';
import { ContatosComponent } from './pages/contatos/contatos.component';
import { PedidosComponent } from './pages/pedidos/pedidos.component';

export const routes: Routes = [
    { path: '', component: HomerComponent }, // Rota padrão (home)
    { path: 'sobre', component: SobreComponent },
    { path: 'contatos', component: ContatosComponent },
    { path: 'pedidos', component: PedidosComponent },
    { path: '**', redirectTo: '' } // Rota wildcard para páginas não encontradas
];
