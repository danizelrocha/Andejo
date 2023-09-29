import { Component, OnInit } from '@angular/core';
import { ArtsService } from 'src/app/shared/components/service/arts.service';

@Component({
  selector: 'app-arts',
  templateUrl: './arts.component.html',
  styleUrls: ['./arts.component.scss']
})
export class ArtsComponent implements OnInit{
  galeria: any
  rascunho: any
  versoes: any
  autorais: any
  destaques: any

  constructor (private service: ArtsService) {}

  ngOnInit(): void {
   this.getGaleria()
/*    this.getRascunho()
   this.getVersoes()
   this.getAutorais()
   this.getDestaques() */
  }

  getGaleria(){
    this.service.getListGaleria().subscribe((resposta) =>{
      this.galeria = resposta
    })
  }

/*   getRascunho(){
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
