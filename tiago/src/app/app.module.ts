import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FooterComponent } from './core/footer/footer.component';
import { NavComponent } from './core/nav/nav.component';
import { HomeComponent } from './pages/home/home.component';
import { GaleriaComponent } from './pages/galeria/galeria.component';
import { DestaquesComponent } from './pages/destaques/destaques.component';
import { VersoesComponent } from './pages/versoes/versoes.component';
import { AutoralComponent } from './pages/autoral/autoral.component';
import { RascunhoComponent } from './pages/rascunho/rascunho.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    GaleriaComponent,
    DestaquesComponent,
    VersoesComponent,
    AutoralComponent,
    RascunhoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
