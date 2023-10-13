import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArtsService } from 'src/app/shared/components/service/arts.service';
import { Arts } from 'src/app/core/enums/Arts.enums';
import { ErrorMessageService } from 'src/app/shared/components/service/erro-message.service';

@Component({
  selector: 'app-arts',
  templateUrl: './arts.component.html',
  styleUrls: ['./arts.component.scss'],
})
export class ArtsComponent implements OnInit {
  mostrarMensagemDeErro: boolean = false;
  categoriaSelecionada: Arts | null = null;
  imagens: string[] = [];

  constructor(
    private artsService: ArtsService,
    private route: ActivatedRoute,
    private router: Router,
    private errorMessageService: ErrorMessageService
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
      this.artsService.getListPorCategoria(categoria).subscribe({
        next: (resposta: string[]) => {
          this.imagens = resposta;
          console.log('Imagens carregadas com sucesso:', categoria, this.imagens);
          this.mostrarMensagemDeErro = false; // Redefina mostrarMensagemDeErro para falso em caso de sucesso
          this.errorMessageService.ocultarMensagemDeErro();
        },
        error: (error) => {
          console.error('Erro ao carregar imagens:', categoria, error);
          this.errorMessageService.mostrarMensagemDeErro();
          this.mostrarMensagemDeErro = true; // Defina mostrarMensagemDeErro como verdadeiro em caso de erro
          this.imagens = [];
        },
      });
    }
  }
}
