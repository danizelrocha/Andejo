import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Arts } from 'src/app/core/enums/Arts.enums';

@Injectable({
  providedIn: 'root'
})
export class ArtsService {

  constructor(private http: HttpClient) { }

  getListPorCategoria(categoria: Arts): Observable<any[]> {
    let baseUrl = 'http://localhost:3000/';

    let url: string;

    switch (categoria) {
      case Arts.Destaques:
        url = `${baseUrl}Destaques`;
        break;
      case Arts.Galeria:
        url = `${baseUrl}Galeria`;
        break;
      case Arts.Versoes:
        url = `${baseUrl}Versoes`;
        break;
      case Arts.Autorais:
        url = `${baseUrl}Autorais`;
        break;
      case Arts.Rascunhos:
        url = `${baseUrl}Rascunho`;
        break;
    }
    return this.http.get<any[]>(url);
  }

}
