import { Component, OnInit } from '@angular/core';
import { Arts } from 'src/app/core/enums/Arts.enums';
import { ArtsService } from 'src/app/shared/components/service/arts.service';

@Component({
  selector: 'app-arts',
  templateUrl: './arts.component.html',
  styleUrls: ['./arts.component.scss']
})
export class ArtsComponent implements OnInit{
  galeria: any
/*rascunho: any
  versoes: any
  autorais: any
  destaques: any */


/* Galeria = Arts[1];
   Autorais = Arts[2];
   Rascunhos = Arts [3];
   Versoes = Arts[4];
   Destaques = Arts[5]


   gaNumber: string = Arts[galeria]; // 1
   gafromString = Arts["Monday"]; // 1 */


  constructor (private service: ArtsService) {}

  ngOnInit(): void {
   this.getGaleria()
/* this.getRascunho()
   this.getVersoes()
   this.getAutorais()
   this.getDestaques() */
  }

  getGaleria(){
    this.service.getListGaleria().subscribe((resposta) =>{
      this.galeria = resposta
      console.log("qualquer coisa", resposta)
    })
  }



/* getRascunho(){
    this.service.getListRascunho().subscribe((resposta) =>{
      this.rascunho = resposta
    })
  }

  getVersoes(){
    this.service.getListVersoes().subscribe((resposta) =>{
      this.versoes = resposta
    })
  }

  getAutorais(){
    this.service.getListAutorais().subscribe((resposta) =>{
      this.autorais = resposta
    })
  }

  getDestaques(){
    this.service.getListDestaques().subscribe((resposta) =>{
      this.destaques = resposta
    })
  } */

}
