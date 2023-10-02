import { Component, OnInit } from '@angular/core';
import { Arts } from './../../core/enums/Arts.enums';
import { ArtsService } from 'src/app/shared/components/service/arts.service';

@Component({
  selector: 'app-arts',
  templateUrl: './arts.component.html',
  styleUrls: ['./arts.component.scss']
})
export class ArtsComponent implements OnInit {
  categoriaSelecionada: Arts | null = null;
  imagens: string[] = [];
  imagensPorCategoria: Record<Arts, string[]> = {
    [Arts.Destaques]: [],
    [Arts.Galeria]: [],
    [Arts.Versoes]: [],
    [Arts.Autorais]: [],
    [Arts.Rascunhos]: [],
  };

  constructor(private artsService: ArtsService) {}

  ngOnInit(): void {
    // Carregue todas as imagens ao iniciar
    this.carregarImagensPorCategoria(Arts.Galeria);
  }

  selecionarCategoria(categoria: Arts) {
    this.categoriaSelecionada = categoria;
    if (this.imagensPorCategoria[categoria].length === 0) {
      // Carregue as imagens apenas se ainda não estiverem carregadas
      this.carregarImagensPorCategoria(categoria);
    }
  }

  carregarImagensPorCategoria(categoria: Arts) {
    this.artsService.getListPorCategoria(categoria).subscribe((resposta: string[]) => {
      this.imagensPorCategoria[categoria] = resposta;
      this.imagens = this.imagensPorCategoria[categoria];
      console.log('Imagens carregadas com sucesso:', this.imagens);
    }, (error) => {
      console.error('Erro ao carregar imagens:', error);
    });
  }
}
