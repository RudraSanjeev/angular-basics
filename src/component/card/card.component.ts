import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  @Input()
  card: any;
  cardCounter = 0;
  increment() {
    return (this.cardCounter += 1);
  }
  decrement() {
    if (this.cardCounter > 0) {
      return (this.cardCounter -= 1);
    }
    return this.cardCounter;
  }

  message: string = '';

  @Output()
  messageEvent = new EventEmitter();

  searchInput(event: any) {
    this.message = event.target.value;
    // console.log(event.target.value);
  }

  sendMessage() {
    this.messageEvent.emit(this.message);
    this.message = '';
  }
}
