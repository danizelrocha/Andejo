import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Arts } from 'src/app/core/enums/Arts.enums';
import { ArtsService } from '../service/arts.service';
import { QueryParamService } from '../service/query-param.service';
import { ErrorMessageService } from '../service/erro-message.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  @Input() categoriaSelecionada: Arts | null = null;
  @Input() mostrarMensagemDeErro: boolean = false;
  imagens: { url: string, categoria: Arts }[] = [];

  constructor(
    private route: ActivatedRoute,
    private artsService: ArtsService,
    private queryParamsService: QueryParamService,
    private errorMessageService: ErrorMessageService
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      const categoria = params['categoria'];
      if (categoria) {
        this.categoriaSelecionada = Arts[categoria as keyof typeof Arts];
      }

      this.carregarImagensPorCategoria(this.categoriaSelecionada);

      this.queryParamsService.setQueryParams(params);
    });
  }

  carregarImagensPorCategoria(categoria: Arts | null) {
    if (categoria) {
      this.artsService.getListPorCategoria(categoria).subscribe({
        next: (resposta: { url: string, categoria: Arts }[]) => {
          this.imagens = resposta.filter((imagem) => imagem.categoria === categoria);
          console.log('Imagens carregadas com sucesso:', categoria, this.imagens);
          this.errorMessageService.ocultarMensagemDeErro();
        },
        error: (error) => {
          console.error('Erro ao carregar imagens:', categoria, error);
          this.errorMessageService.mostrarMensagemDeErro();
          this.imagens = [];
        },
      });
    }
  }
}
