import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ArtsService {

  constructor(private http: HttpClient) {}

  getListGaleria(){
    let galeria = this.http. get('http://localhost:3000/Galeria')
    return galeria;
  }

  getListRascunho(){
    let rascunho = this.http. get('http://localhost:3000/Rascunho')
    return rascunho;
  }

  getListVersoes(){
    let versoes = this.http. get('http://localhost:3000/Versoes')
    return versoes;
  }

  getListAutorais(){
    let autorais = this.http. get('http://localhost:3000/Autorais')
    return autorais;
  }

  getListDestaques(){
    let destaques = this.http. get('http://localhost:3000/Destaques')
    return destaques;
  }
}
