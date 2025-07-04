import { Routes } from '@angular/router';
import { HomerComponent } from './pages/homer/homer.component';
import { SobreComponent } from './pages/sobre/sobre.component';
import { HeaderComponent } from './pages/header/header.component';
import { FooterComponent } from './pages/footer/footer.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomerComponent },
    { path: 'sobre', component: SobreComponent },
    { path: 'header', component: HeaderComponent },
    { path: 'footer', component: FooterComponent },
    { path: '**', redirectTo: '/home' }
];
