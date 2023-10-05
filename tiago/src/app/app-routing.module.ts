import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

import { ArtsComponent } from './pages/arts/arts.component';
import { GalleryComponent } from './shared/components/gallery/gallery.component';
import { Arts } from './core/enums/Arts.enums';


const routes: Routes = [

  {
    path:'', redirectTo: 'home', pathMatch: 'full'
  },

  {
    path:'home', component: HomeComponent
  },

  {
    path:'arts', component: ArtsComponent
  },
  {
    path:'galeria', component: ArtsComponent, data: {categoriaSelecionada: Arts.Galeria }
  },
  {
    path:'rascunhos', component: ArtsComponent, data: {categoriaSelecionada: Arts.Rascunhos }
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
