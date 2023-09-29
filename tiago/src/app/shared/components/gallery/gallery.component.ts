import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit{

  constructor() {}

  ngOnInit(): void {

    /* console.log('imageurls', this.imageUrls);

    this.imageUrls2 = this.imageUrls.split(","); //  gambeta de alta qualidade */

  }

 /*  @Input() imageUrls: any;

  imageUrls2: string[] = []; */
};
