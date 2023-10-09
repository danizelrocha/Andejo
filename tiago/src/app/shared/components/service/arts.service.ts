import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Arts } from 'src/app/core/enums/Arts.enums';

@Injectable({
  providedIn: 'root'
})
export class ArtsService {
  private baseUrl = 'http://localhost:3000/';

  constructor(private http: HttpClient) { }

  getListPorCategoria(categoria: Arts): Observable<any[]> {
    let categoriaString: string;
    switch (categoria) {
      case Arts.Destaques:
        categoriaString = 'Destaques';
        break;
      case Arts.Galeria:
        categoriaString = 'Galeria';
        break;
      case Arts.Versoes:
        categoriaString = 'Versoes';
        break;
      case Arts.Autorais:
        categoriaString = 'Autorais';
        break;
      case Arts.Rascunhos:
        categoriaString = 'Rascunho';
        break;
      default:
        console.error('Categoria não encontrada:', categoria);
        return new Observable<any[]>(observer => {
          observer.error('Categoria não encontrada.');
        });
    }

    const url = `${this.baseUrl}${categoriaString}`;
    return this.http.get<any[]>(url);
  }
}
