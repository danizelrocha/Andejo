import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DestaquesComponent } from './pages/destaques/destaques.component';
import { GaleriaComponent } from './pages/galeria/galeria.component';
import { AutoralComponent } from './pages/autoral/autoral.component';
import { RascunhoComponent } from './pages/rascunho/rascunho.component';
import { VersoesComponent } from './pages/versoes/versoes.component';

const routes: Routes = [

  {
    path:'', redirectTo: 'home', pathMatch: 'full'
  },

  {
    path:'home', component: HomeComponent
  },

  {
    path:'destaques', component: DestaquesComponent
  },

  {
    path:'galeria', component: GaleriaComponent
  },

  {
    path:'autoral', component: AutoralComponent
  },

  {
    path:'rascunho', component: RascunhoComponent
  },

  {
    path:'versoes', component: VersoesComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
