import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'ProductFiltering',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './product-filtering.component.html',
  styleUrl: './product-filtering.component.scss',
})
export class ProductFilteringComponent {
  selected: string = 'all';
  @Output()
  stockEvent: any = new EventEmitter();
  handleChangeStock() {
    // console.log(this.selected);
    this.stockEvent.emit(this.selected);
  }
}
