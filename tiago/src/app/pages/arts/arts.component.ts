import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Arts } from 'src/app/core/enums/Arts.enums';
import { ArtsService } from 'src/app/shared/components/service/arts.service';
import { NotificationService } from 'src/app/shared/components/service/notification.service';

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
    private notificationService: NotificationService
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      const categoria = params['categoria'];
      if (categoria) {
        this.categoriaSelecionada = Arts[categoria as keyof typeof Arts];
        this.carregarImagensPorCategoria(this.categoriaSelecionada);
      }
    });
  }

  selecionarCategoria(categoria: Arts) {
    const categoriaString = Arts[categoria].toLowerCase();
    this.router.navigate(['/arts'], { queryParams: { categoria: categoriaString } });
  }

  private carregarImagensPorCategoria(categoria: Arts | null) {
    if (categoria) {
      this.artsService.getListPorCategoria(categoria).subscribe(    // arumar o subscribe implementando next
        (resposta: string[]) => {
          this.imagens = resposta;
          this.notificationService.clearMessage();
        },
        (error) => {
          console.error('Erro ao carregar imagens:', categoria, error);
          this.notificationService.showMessage('Erro ao carregar imagens');
          this.imagens = [];
        }
      );
    }
  }
}
