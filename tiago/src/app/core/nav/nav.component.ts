import { Component, OnInit } from '@angular/core';
//Enums
import { ETheme } from '../enums/ETheme.enums';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  public icon: string = ETheme.ICON_MOON;
  public textTheme: string = ETheme.TEXT_MOON;
  destaques: any|string;

  constructor() { }

  ngOnInit(): void {
  }

  public toggle() {
    const theme = document.body.classList.toggle('dark-theme');

    if (theme) {
      this.textTheme = ETheme.TEXT_SUN;
      return (this.icon = ETheme.ICON_SUN);
    }

    this.textTheme = ETheme.TEXT_MOON;
    return (this.icon = ETheme.ICON_MOON);
  }
}
