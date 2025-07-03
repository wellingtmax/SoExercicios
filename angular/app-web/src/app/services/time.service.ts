import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TimeService {
  private timeSubject = new BehaviorSubject<string>('');
  public time$ = this.timeSubject.asObservable();

  constructor() {
    this.updateTime();
    // Atualiza a hora a cada segundo
    setInterval(() => {
      this.updateTime();
    }, 1000);
  }

  private updateTime(): void {
    const now = new Date();
    const timeString = now.toLocaleTimeString('pt-BR');
    this.timeSubject.next(timeString);
  }

  // Método para forçar atualização (útil para mudanças manuais)
  forceUpdate(): void {
    this.updateTime();
  }
}
