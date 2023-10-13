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
import { ErrorMessageService } from './shared/components/service/erro-message.service';
import { QueryParamService } from './shared/components/service/query-param.service';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavComponent,
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
    ErrorMessageService,
    QueryParamService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
