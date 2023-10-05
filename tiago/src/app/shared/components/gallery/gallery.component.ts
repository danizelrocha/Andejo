import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit{
  @Input() imagens: any;
  constructor() {}

  ngOnInit(): void {

     console.log('galeria', this.imagens);

    //this.imageUrls2 = this.imageUrls.split(","); //  gambeta de alta qualidade */

  }

 /*

  imageUrls2: string[] = []; */
};
