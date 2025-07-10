import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { authGuard } from './Guard/auth.guard';
import { DadosComponent } from './components/dados/dados.component';
import { Dodos2Component } from './components/dodos2/dodos2.component';

export const routes: Routes =
[
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent, canActivate: [authGuard]},
  {path: 'dados', component: DadosComponent},
  {path: 'dodos2', component: Dodos2Component},
];
