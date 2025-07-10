import { Routes } from '@angular/router';
import { ImcComponent } from './pages/imc/imc.component';
import { QuadradoComponent } from './pages/quadrado/quadrado.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'imc', component: ImcComponent },
  { path: 'quadrado', component: QuadradoComponent }
];
