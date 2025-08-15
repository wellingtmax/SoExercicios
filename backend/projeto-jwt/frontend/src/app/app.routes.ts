import { Routes} from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AdminComponent } from './components/admin/admin.component';
import { HomeComponent } from './components/home/home.component';
import { UserComponent } from './components/user/user.component';
import { adminGuard } from './guards/admin.guard';
import { userGuard } from './guards/user.guard';
import { loginGuard } from './guards/login.guard';


export const routes: Routes = [
  // Login com guard melhorado
  { path: 'login', component: LoginComponent, canActivate: [loginGuard] },

  // Área admin → só adminGuard
  { path: 'admin', component: AdminComponent, canActivate: [adminGuard] },
  { path: 'admin/home', component: HomeComponent, canActivate: [adminGuard] },

  // Rota temporária para testar admin sem guard
  { path: 'admin-debug', component: AdminComponent },

  // Área user → só userGuard
  { path: 'user', component: UserComponent, canActivate: [userGuard] },
  { path: 'user/home', component: HomeComponent, canActivate: [userGuard] },

  // Redirecionamento padrão
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', redirectTo: 'login' }
];
