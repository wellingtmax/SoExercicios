import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Contator01Component } from './components/contator01/contator01.component';
import { Contator02Component } from './components/contator02/contator02.component';
import { Contator03Component } from './components/contator03/contator03.component';
import { Contator04Component } from './components/contator04/contator04.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet, 
    Contator01Component, 
    Contator02Component, 
    Contator03Component, 
    Contator04Component
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'rotas';
}
