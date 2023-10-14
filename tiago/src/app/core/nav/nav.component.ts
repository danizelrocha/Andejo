import { Component, OnInit } from '@angular/core';
import { ETheme } from '../enums/ETheme.enums';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  public icon: string = ETheme.ICON_MOON;
  public textTheme: string = ETheme.TEXT_MOON;

  categoria: string | null = null; // Inicia como null, já que a categoria ainda não foi selecionada

  constructor(private router: Router,) { }

  ngOnInit(): void { }

  public toggle() {
    const theme = document.body.classList.toggle('dark-theme');

    if (theme) {
      this.textTheme = ETheme.TEXT_SUN;
      return (this.icon = ETheme.ICON_SUN);
    }

    this.textTheme = ETheme.TEXT_MOON;
    return (this.icon = ETheme.ICON_MOON);
  }

  // Função para navegar para uma categoria específica
  public navigateToCategoria(categoria: string) {
    this.router.navigate(['/arts'], {
      queryParams: { categoria: categoria },
    });
  }
}






