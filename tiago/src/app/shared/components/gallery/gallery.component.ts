import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit{
galeria: any;

  constructor() {}

  ngOnInit(): void {

     console.log('galeria', this.galeria);

    //this.imageUrls2 = this.imageUrls.split(","); //  gambeta de alta qualidade */

  }

 /*  @Input() imageUrls: any;

  imageUrls2: string[] = []; */
};
