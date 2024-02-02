import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { CommonModule } from '@angular/common';
import { CardsService } from '../../service/cardsService/cards.service';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.scss',
})
export class CardsComponent {
  cardsData: any;
  childMessage: any = '';

  constructor(CardsService: CardsService) {
    this.cardsData = CardsService.getAllCards();
  }

  parentReceived(message: string) {
    console.log(message);
    this.childMessage = message;
    message = '';
  }
}
