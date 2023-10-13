import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Arts } from 'src/app/core/enums/Arts.enums';
import { ErrorMessageService } from './erro-message.service';

@Injectable({
  providedIn: 'root'
})
export class ArtsService {
  private baseUrl = 'http://localhost:3000/';

  constructor(private http: HttpClient, private errorMessageService: ErrorMessageService) { }

  getListPorCategoria(categoria: Arts): Observable<any[]> {
    const categoriaString = this.getCategoriaString(categoria);

    if (categoriaString === 'Desconhecido') {
      this.errorMessageService.mostrarMensagemDeErro();
      return new Observable<any[]>(observer => {
        observer.error('Categoria não encontrada.');
      });
    }

    const url = `${this.baseUrl}${categoriaString}`;

    return this.http.get<any[]>(url)
      .pipe(
        catchError(() => {
          this.errorMessageService.mostrarMensagemDeErro();
          throw 'Erro ao carregar imagens.';
        })
      );
  }

  private getCategoriaString(categoria: Arts): string {
    switch (categoria) {
      case Arts.Destaques:
        return 'Destaques';
      case Arts.Galeria:
        return 'Galeria';
      case Arts.Versoes:
        return 'Versoes';
      case Arts.Autorais:
        return 'Autorais';
      case Arts.Rascunhos:
        return 'Rascunho';
      default:
        this.errorMessageService.mostrarMensagemDeErro();
        return 'Desconhecido';
    }
  }
}
