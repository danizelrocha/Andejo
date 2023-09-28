import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rascunho',
  templateUrl: './rascunho.component.html',
  styleUrls: ['./rascunho.component.scss']
})
export class RascunhoComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}


  imageUrls: string[] = [
    '~/../assets/image/rascunho/11.jpg',
    '~/../assets/image/rascunho/12.jpg',
    '~/../assets/image/rascunho/13.jpg',
    '~/../assets/image/rascunho/14.jpg',
    '~/../assets/image/rascunho/16.jpg',
    '~/../assets/image/rascunho/17.jpg',
    '~/../assets/image/rascunho/18.jpg',
    '~/../assets/image/rascunho/19.jpg',
    '~/../assets/image/rascunho/20.jpg',
  ];
}
