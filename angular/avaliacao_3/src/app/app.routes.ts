import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CalculadoraComponent } from './components/calculadora/calculadora.component';
import { AuthApiComponent } from './components/auth-api/auth-api.component';
import { HeaderComponent } from './components/header/header.component';



export const routes: Routes =
[
  {path: '',
    component: HomeComponent
  },
  {
    path: 'calculadora',
    component: CalculadoraComponent
  },
  {
    path: 'authApi',
    component: AuthApiComponent
  },
  {
    path: 'header',
    component: HeaderComponent
  }
];
