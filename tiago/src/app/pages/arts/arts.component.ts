import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Arts } from './../../core/enums/Arts.enums';
import { ArtsService } from 'src/app/shared/components/service/arts.service';
import { QueryParamService } from 'src/app/shared/components/service/query-param.service';
import { ErrorMessageService } from 'src/app/shared/components/service/erro-message.service';

@Component({
  selector: 'app-arts',
  templateUrl: './arts.component.html',
  styleUrls: ['./arts.component.scss',]
})
export class ArtsComponent implements OnInit {
  @Input() mostrarMensagemDeErro: boolean = false; // Adicione a entrada para mostrar a mensagem de erro
  categoriaSelecionada: Arts | null = null;
  imagens: string[] = [];

  constructor(
    private artsService: ArtsService,
    private route: ActivatedRoute,
    private router: Router,
    private queryParamsService: QueryParamService,
    private errorMessageService: ErrorMessageService
  ) {}

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
        this.errorMessageService.ocultarMensagemDeErro();
      },
      error: (error) => {
        console.error('Erro ao carregar imagens:', categoria, ';', error);
        this.errorMessageService.mostrarMensagemDeErro();
        this.mostrarMensagemDeErro = true; // Defina mostrarMensagemDeErro como verdadeiro em caso de erro
        // Você também pode configurar mostrarMensagemDeErro com base na lógica do seu aplicativo aqui.
      },
    });
  }
}
