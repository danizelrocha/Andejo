import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Arts } from './../../core/enums/Arts.enums';
import { ArtsService } from 'src/app/shared/components/service/arts.service';
import { QueryParamService } from 'src/app/shared/components/service/query-param.service.ts.service';

@Component({
  selector: 'app-arts',
  templateUrl: './arts.component.html',
  styleUrls: ['./arts.component.scss']
})
export class ArtsComponent implements OnInit {
  categoriaSelecionada: Arts | null = null;
  imagens: string[] = [];

  constructor(
    private artsService: ArtsService,
    private route: ActivatedRoute,
    private router: Router,
    private queryParamsService: QueryParamService
  ) { }

  ngOnInit(): void {
    this.route.data.subscribe((data) => {
      this.categoriaSelecionada = data['categoriaSelecionada'] || null;
      const queryParams = this.queryParamsService.queryParams$; // Acesse os queryParams do serviço

      if (this.categoriaSelecionada) {
        this.carregarImagensPorCategoria(this.categoriaSelecionada);
      }
    });
  }

  selecionarCategoria(categoria: Arts) {
    // Atualiza a URL com a nova categoria
    const categoriaString = Arts[categoria].toLowerCase();
    this.router.navigate(['/arts', categoriaString]);

    // Atualiza a categoria selecionada
    this.categoriaSelecionada = categoria;
    this.carregarImagensPorCategoria(categoria);
  }

  private carregarImagensPorCategoria(categoria: Arts) {
    this.artsService.getListPorCategoria(categoria).subscribe({
      next: (resposta: string[]) => {
        this.imagens = resposta;
        console.log('Imagens carregadas com sucesso:', categoria, ';', this.imagens);
      },
      error: (error) => {
        console.error('Erro ao carregar imagens:', categoria, ';', error);
      },
    });
  }
}
