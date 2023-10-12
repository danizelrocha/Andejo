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
  public isDarkTheme = false; // Variável para controlar o tema

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
    this.isDarkTheme = !this.isDarkTheme; // Alternar o tema
    this.icon = this.isDarkTheme ? ETheme.ICON_SUN : ETheme.ICON_MOON;
    this.textTheme = this.isDarkTheme ? ETheme.TEXT_SUN : ETheme.TEXT_MOON;
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
