import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  private messageSubject: BehaviorSubject<string> = new BehaviorSubject('');
  message$: Observable<string> = this.messageSubject.asObservable();

  showMessage(message: string) {
    this.messageSubject.next(message);
  }

  clearMessage() {
    this.messageSubject.next('');
  }
}
