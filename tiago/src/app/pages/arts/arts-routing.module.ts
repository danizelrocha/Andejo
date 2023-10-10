import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtsComponent } from './arts.component';
import { GalleryComponent } from 'src/app/shared/components/gallery/gallery.component';
import { Arts } from 'src/app/core/enums/Arts.enums';


const routes: Routes = [
  {
    path: 'arts/:categoria',
    component: ArtsComponent,
    children: [
      { path: 'destaques', component: GalleryComponent, data: { categoriaSelecionada: Arts.Destaques } },
      { path: 'galeria', component: GalleryComponent, data: { categoriaSelecionada: Arts.Galeria } },
      { path: 'versoes', component: GalleryComponent, data: { categoriaSelecionada: Arts.Versoes } },
      { path: 'autorais', component: GalleryComponent, data: { categoriaSelecionada: Arts.Autorais } },
      { path: 'rascunho', component: GalleryComponent, data: { categoriaSelecionada: Arts.Rascunhos } }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArtsRoutingModule { }
