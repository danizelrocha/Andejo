import { Component, OnInit,  } from '@angular/core';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.scss']
})
export class GaleriaComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {

  }
  imageUrls: string[] = [
    '~/../assets/image/desenhos/1.jpg',
    '~/../assets/image/desenhos/2.jpg',
    '~/../assets/image/desenhos/3.jpg',
    '~/../assets/image/desenhos/5.jpg',
    '~/../assets/image/desenhos/6.jpg',
    '~/../assets/image/desenhos/7.jpg',
    '~/../assets/image/desenhos/8.jpg',
    '~/../assets/image/desenhos/9.jpg',
    '~/../assets/image/desenhos/10.jpg',
  ];
}
