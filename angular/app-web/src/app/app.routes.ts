import { Routes } from '@angular/router';
import { HomerComponent } from './pages/homer/homer.component';
import { FooterComponent } from './pages/footer/footer.component';
import { HeaderComponent } from './pages/header/header.component';
import { NavBarComponent } from './pages/nav-bar/nav-bar.component';
import { ContatosComponent } from './pages/contatos/contatos.component';
import { SobreComponent } from './pages/sobre/sobre.component';
import { GaleriaComponent } from './pages/galeria/galeria.component';


export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomerComponent },
    { path: 'header', component: HeaderComponent },
    { path: 'footer', component: FooterComponent },
    { path: 'navbar',  component: NavBarComponent},
    { path: 'contatos',  component: ContatosComponent},
    { path: 'sobre',  component: SobreComponent},
    { path: 'galeria',  component: GaleriaComponent},
    { path: '**', redirectTo: '/home' }
];
