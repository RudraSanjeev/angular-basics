import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class CardsService {
  getAllCards() {
    return [
      {
        title: 'Notebook',
        desc: 'this is beautiful notebook',
        imgUrl: '../../assets/bg2.jpeg',
      },
      {
        title: 'Pen',
        desc: 'this is beautiful Pen',
        imgUrl: '../../assets/bg1.jpeg',
      },
      {
        title: 'Book',
        desc: 'this is beautiful Book',
        imgUrl: '../../assets/bg3.jpeg',
      },
    ];
  }
}
