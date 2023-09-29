import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

import { ArtsComponent } from './pages/arts/arts.component';

const routes: Routes = [

  {
    path:'', redirectTo: 'home', pathMatch: 'full'
  },

  {
    path:'home', component: HomeComponent
  },

  {
    path:'destaques', component: ArtsComponent
  },

  {
    path:'galeria', component: ArtsComponent
  },

  {
    path:'autoral', component: ArtsComponent
  },

  {
    path:'rascunho', component: ArtsComponent
  },

  {
    path:'versoes', component: ArtsComponent
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
