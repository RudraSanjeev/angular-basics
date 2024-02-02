import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'SingleProduct',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './single-product.component.html',
  styleUrl: './single-product.component.scss',
})
export class SingleProductComponent {
  @Input()
  singleProduct: any;
}
