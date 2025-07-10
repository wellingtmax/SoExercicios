import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule],
  template: `
    <div style="justify-items: center;">
      <h1 style="color: red;">App Service</h1>
      <nav>
        <a style="text-decoration: none; font-size:50px; color: blue;" routerLink="/imc">IMC</a> <em style="font-size:60px;">|</em> 
        <a style="text-decoration: none; font-size:50px; color: green;" routerLink="/quadrado">Quadrado</a>
      </nav>
    </div>
  `,
  styles: []
})
export class HomeComponent {

}
