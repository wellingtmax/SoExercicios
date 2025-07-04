import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { FooterComponent } from './compontes/footer/footer.component';
import { HeaderComponent } from './compontes/header/header.component';

@Component({
  selector: 'app-root',
  imports: [RouterModule, RouterOutlet, FooterComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'website';
}
