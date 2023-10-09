import { Component, Input, OnInit } from '@angular/core';
import { Arts } from 'src/app/core/enums/Arts.enums';
import { ArtsService } from 'src/app/shared/components/service/arts.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  @Input() categoriaSelecionada: Arts | null = null;
  imagens: string[] = [];

  constructor(private artsService: ArtsService) { }

  ngOnInit(): void {
    if (this.categoriaSelecionada) {
      this.carregarImagensPorCategoria(this.categoriaSelecionada);
    }
  }

  carregarImagensPorCategoria(categoria: Arts) {
    this.artsService.getListPorCategoria(categoria).subscribe({
      next: (resposta: string[]) => {
        this.imagens = resposta;
        console.log('Imagens carregadas com sucesso:', categoria, this.imagens);
      },
      error: (error) => {
        console.error('Erro ao carregar imagens:', categoria, error);
      },
    });
  }
}
