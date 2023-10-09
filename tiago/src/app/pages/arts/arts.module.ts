import { NgModule } from '@angular/core';
import { ArtsComponent } from './arts.component';
import { GalleryComponent } from 'src/app/shared/components/gallery/gallery.component';
import { CommonModule } from '@angular/common';
import { ArtsRoutingModule } from './arts-routing.module';

@NgModule({
  declarations: [
    ArtsComponent,
    GalleryComponent
  ],
  imports: [
    CommonModule,
    ArtsRoutingModule
  ],
})
export class ArtsModule { }
