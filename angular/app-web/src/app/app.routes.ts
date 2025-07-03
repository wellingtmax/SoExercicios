import { Routes } from '@angular/router';
import { HomerComponent } from './pages/homer/homer.component';
import { FooterComponent } from './pages/footer/footer.component';
import { HeaderComponent } from './pages/header/header.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomerComponent },
    { path: 'header', component: HeaderComponent },
    { path: 'footer', component: FooterComponent },
    { path: '**', redirectTo: '/home' } // Rota curinga para páginas não encontradas
];
