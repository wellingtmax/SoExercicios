import { Routes } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './home/home/home.component';
import { SobreComponent } from './pages/sobre/sobre.component';
import { ContatoComponent } from './pages/contato/contato.component';
import { ServicoComponent } from './pages/servico/servico.component';
import { AuthGuard } from './guards/auth.guard';
import { CadastroComponent } from './components/cadastro/cadastro.component';

export const routes: Routes = [
  {
    path: '',
    component: ServicoComponent
  },
  {path: 'cadastro',
    component: CadastroComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'sobre',
    component: SobreComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'contato',
    component: ContatoComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'servico',
    component: ServicoComponent
  }
];
