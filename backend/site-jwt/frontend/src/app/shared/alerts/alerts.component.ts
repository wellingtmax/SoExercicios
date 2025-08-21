import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertsService } from '../../services/alerts.service';


@Component({
  selector: 'app-alerts',
  imports: [CommonModule],
  templateUrl: './alerts.component.html',
  styleUrl: './alerts.component.css'
})
export class AlertsComponent {

alertsService = inject(AlertsService)

}
