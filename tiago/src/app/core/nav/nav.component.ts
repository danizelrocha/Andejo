import { Component, OnInit } from '@angular/core';
import { ETheme } from '../enums/ETheme.enums';
import { ArtsService } from 'src/app/shared/components/service/arts.service';
import { Arts } from '../enums/Arts.enums';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  public icon: string = ETheme.ICON_MOON;
  public textTheme: string = ETheme.TEXT_MOON;
  destaques: any | string;
  artsEnum = Arts;

  constructor(
    private artsService: ArtsService,
    private router: Router
  ) { }

  ngOnInit(): void {
    // Não carrega automaticamente nenhuma categoria ao inicializar
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
    this.artsService.getListPorCategoria(categoria).subscribe({
      next: (destaques) => {
        this.destaques = destaques;
        console.log('Destaques carregados com sucesso:', categoria, this.destaques);
      },
      error: (error) => {
        console.error('Erro ao carregar destaques:', error);
      },
    });
  }

  // Função para navegar para uma categoria específica
  public navigateToCategoria(categoria: Arts) {
    const categoriaString = Arts[categoria].toLowerCase();
    this.router.navigate([categoriaString]);
  }
}
