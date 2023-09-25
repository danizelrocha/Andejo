import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DestaquesComponent } from './pages/destaques/destaques.component';
import { GaleriaComponent } from './pages/galeria/galeria.component';

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

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
