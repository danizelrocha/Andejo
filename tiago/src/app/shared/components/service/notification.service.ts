import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  private messageSubject: BehaviorSubject<string> = new BehaviorSubject('');
  message$: Observable<string> = this.messageSubject.asObservable();

  private errorSubject: BehaviorSubject<boolean> = new BehaviorSubject(false);
  error$: Observable<boolean> = this.errorSubject.asObservable();

  private errorMessageSubject: BehaviorSubject<string> = new BehaviorSubject('');
  errorMessage$: Observable<string> = this.errorMessageSubject.asObservable();

  showMessage(message: string) {
    this.messageSubject.next(message);
  }

  clearMessage() {
    this.messageSubject.next('');
  }

  setError(message: string) {
    this.errorSubject.next(true);
    this.errorMessageSubject.next(message);
  }

  clearError() {
    this.errorSubject.next(false);
    this.errorMessageSubject.next('');
  }
}
