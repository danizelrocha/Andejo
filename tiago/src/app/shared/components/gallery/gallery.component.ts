import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArtsService } from '../service/arts.service';
import { QueryParamService } from '../service/query-param.service';
import { NotificationService } from '../service/notification.service';
import { Arts } from 'src/app/core/enums/Arts.enums';
import { switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

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
    private notificationService: NotificationService
  ) {}

  ngOnInit(): void {
    this.route.queryParams
      .pipe(
        switchMap(params => {
          const categoria = params['categoria'];
          if (categoria) {
            this.categoriaSelecionada = Arts[categoria as keyof typeof Arts];
            this.queryParamsService.setQueryParams(params);
            return this.artsService.getListPorCategoria(this.categoriaSelecionada);
          } else {
            // Se não houver categoria nos parâmetros, retorne um observable vazio.
            return of([]);
          }
        })
      )
      .subscribe({
        next: (resposta: { url: string, categoria: Arts }[]) => {
          this.imagens = resposta.filter((imagem) => imagem.categoria === this.categoriaSelecionada);
          console.log('Imagens carregadas com sucesso:', this.categoriaSelecionada, this.imagens);
          this.notificationService.clearMessage(); // Use o método clearMessage para ocultar a mensagem de erro
        },
        error: (error) => {
          console.error('Erro ao carregar imagens:', this.categoriaSelecionada, error);
          this.notificationService.showMessage('Erro ao carregar imagens'); // Use o método showMessage para mostrar a mensagem de erro
          this.imagens = [];
        },
      });

  }
}
