import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ErrorMessageService {
  private mostrarMensagemDeErroSubject: BehaviorSubject<boolean> = new BehaviorSubject(false);
  mostrarMensagemDeErro$: Observable<boolean> = this.mostrarMensagemDeErroSubject.asObservable();

  constructor() {}

  mostrarMensagemDeErro() {
    this.mostrarMensagemDeErroSubject.next(true);
  }

  ocultarMensagemDeErro() {
    this.mostrarMensagemDeErroSubject.next(false);
  }
}

