import { Injectable } from '@angular/core';

export interface Alert {
  id: string;
  message: string;
  type: 'success' | 'error' | 'warning' | 'info';
  duration: number;
  timestamp: number;
}

@Injectable({
  providedIn: 'root'
})
export class AlertsService {

  constructor() { }

  alerts: Alert[] = [];
  private alertCounter = 0;

  private generateId(): string {
    return `alert-${++this.alertCounter}-${Date.now()}`;
  }

  addAlert(message: string, type: 'success' | 'error' | 'warning' | 'info' = 'info', duration: number = 5000): string {
    const alert: Alert = {
      id: this.generateId(),
      message,
      type,
      duration,
      timestamp: Date.now()
    };

    this.alerts.push(alert);

    // Auto-remover após a duração especificada
    setTimeout(() => {
      this.removeAlert(alert.id);
    }, duration);

    return alert.id;
  }

  removeAlert(id: string) {
    const index = this.alerts.findIndex(alert => alert.id === id);
    if (index > -1) {
      this.alerts.splice(index, 1);
    }
  }

  addTemporalAlert(
    message: string,
    type: 'success' | 'error' | 'warning' | 'info' = 'info',
    duration: number = 5000
  ): string {
    return this.addAlert(message, type, duration);
  }

  // Métodos de conveniência para diferentes tipos
  success(message: string, duration: number = 3000): string {
    return this.addAlert(message, 'success', duration);
  }

  error(message: string, duration: number = 6000): string {
    return this.addAlert(message, 'error', duration);
  }

  warning(message: string, duration: number = 4000): string {
    return this.addAlert(message, 'warning', duration);
  }

  info(message: string, duration: number = 5000): string {
    return this.addAlert(message, 'info', duration);
  }

  // Limpar todos os alertas
  clearAll() {
    this.alerts = [];
  }
}
