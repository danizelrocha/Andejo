import { Component, OnInit } from '@angular/core';

//Tema
import { ETheme } from '../enums/ETheme.enums';

//imagens
import { ArtsService } from 'src/app/shared/components/service/arts.service';
import { Arts } from '../enums/Arts.enums';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  public icon: string = ETheme.ICON_MOON;
  public textTheme: string = ETheme.TEXT_MOON;
  destaques: any | string;
  artsEnum = Arts;

  constructor(private artsService: ArtsService,
    private router: Router,
    private service: ArtsService) { }

  ngOnInit(): void {
    // Inicialize os destaques aqui com a categoria padrão (por exemplo, Galeria)
    this.carregarDestaques(Arts.Galeria);
  }

  public toggle() {
    const theme = document.body.classList.toggle('dark-theme');

    if (theme) {
      this.textTheme = ETheme.TEXT_SUN;
      return (this.icon = ETheme.ICON_SUN);
    }

    this.textTheme = ETheme.TEXT_MOON;
    return (this.icon = ETheme.ICON_MOON);
  }

  // Função para carregar destaques com base na categoria selecionada
  public carregarDestaques(categoria: Arts) {
    this.artsService.getListPorCategoria(categoria).subscribe((destaques) => {
      this.destaques = destaques;
     // console.log('Destaques carregados com sucesso:', this.destaques);
    }, (error) => {
      //console.error('Erro ao carregar destaques:', error);
    });
  }

  chamarGaleria(){
    this.router.navigate(
      ['http://localhost:3000/galeria']
    )
  }
}
