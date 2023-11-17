import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { Arts } from 'src/app/core/enums/Arts.enums';
import { NotificationService } from './notification.service';

@Injectable({
  providedIn: 'root',
})
export class ArtsService {
  private baseUrl = 'http://localhost:3000/';

  constructor(private http: HttpClient, private notificationService: NotificationService) {}

  getListPorCategoria(categoria: Arts): Observable<any[]> {
    const categoriaString = this.getCategoriaString(categoria);
    const url = `${this.baseUrl}${categoriaString}`;

    return this.http.get<any[]>(url).pipe(
      map((response) => this.processResponse(response, categoria)),
      catchError((error) => this.handleError(error))
    );
  }

  private getCategoriaString(categoria: Arts): string {
    switch (categoria) {
      case Arts.DESTAQUES:
        return 'Destaques';
      case Arts.GALERIA:
        return 'Galeria';
      case Arts.VERSOES:
        return 'Versoes';
      case Arts.AUTORAIS:
        return 'Autorais';
      case Arts.RASCUNHO:
        return 'Rascunho';
      default:
        return 'Desconhecido';
    }
  }

  private processResponse(response: any[], categoria: Arts): any[] {
    // Realiza  qualquer processamento específico da resposta, como filtragem por categoria.
    //console.log(response)
    return response.filter((imagem) => imagem.categoria === categoria);
  }

  private handleError(error: any): Observable<never> {
    let errorMessage: string;

    if (error instanceof Error) {
      errorMessage = `Erro: ${error.message}`;
    } else {
      errorMessage = 'Erro desconhecido ao carregar imagens.';
    }

    this.notificationService.showMessage(errorMessage);

    return new Observable<never>((observer) => {
      observer.error(errorMessage);
    });
  }
}
