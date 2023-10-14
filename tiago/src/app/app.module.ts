
// inchado criar mais modulos tá feio

import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NavComponent } from './core/nav/nav.component';
import { FooterComponent } from './core/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { GalleryComponent } from './shared/components/gallery/gallery.component';
import { ArtsComponent } from './pages/arts/arts.component';

import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';


import { ArtsService } from './shared/components/service/arts.service';
import { NotificationService } from './shared/components/service/notification.service';
import { QueryParamService } from './shared/components/service/query-param.service';



@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    HomeComponent,
    GalleryComponent,
    ArtsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    ArtsService,
    NotificationService,
    QueryParamService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
