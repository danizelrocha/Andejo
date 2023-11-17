import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArtsService } from '../service/arts.service';
import { QueryParamService } from '../service/query-param.service';
import { NotificationService } from 'src/app/shared/components/service/notification.service';
import { Arts } from 'src/app/core/enums/Arts.enums';
import { switchMap, map } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  @Input() categoriaSelecionada: Arts | null = null;
  imagens: { url: string, categoria: Arts }[] = [];

  constructor(
    private route: ActivatedRoute,
    private artsService: ArtsService,
    private queryParamsService: QueryParamService,
    public notificationService: NotificationService
  ) { }

  ngOnInit(): void {
    this.route.queryParams
      .pipe(
        switchMap(params => {
          const categoria = params['categoria'];
          if (categoria) {
            this.categoriaSelecionada = Arts[categoria as keyof typeof Arts];
            this.queryParamsService.setQueryParams(params);
            console.log(this.categoriaSelecionada)
            const cat = this.artsService.getListPorCategoria(this.categoriaSelecionada);

            cat.subscribe({
              next: (resposta: { url: string, categoria: Arts }[]) => {
                console.log(resposta)
                this.imagens = resposta.filter((imagem) => imagem.categoria === this.categoriaSelecionada);
                console.log('Imagens carregadas com sucesso:', this.categoriaSelecionada, this.imagens);
                this.notificationService.clearError(); //  notificationService para limpar a mensagem de erro
              },
              error: (error) => {
                console.error('Erro ao carregar imagens:', this.categoriaSelecionada, error);
                this.imagens = [];
                this.notificationService.setError('Erro ao carregar imagens'); //  notificationService para definir a mensagem de erro
              },
            });

            return cat
          } else {
            return of([]);
          }
        })
      )
      .subscribe({
        next: (resposta: { url: string, categoria: Arts }[]) => {
          this.imagens = resposta.filter((imagem) => imagem.categoria === this.categoriaSelecionada);
          console.log('Imagens carregadas com sucesso:', this.categoriaSelecionada, this.imagens);
          this.notificationService.clearError(); //  notificationService para limpar a mensagem de erro
        },
        error: (error) => {
          console.error('Erro ao carregar imagens:', this.categoriaSelecionada, error);
          this.imagens = [];
          this.notificationService.setError('Erro ao carregar imagens'); //  notificationService para definir a mensagem de erro
        },
      });
  }
}
