import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProductListingService } from '../../service/productListing/product-listing.service';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  navLinks: string[] = ['Home', 'About', 'Service', 'Contact'];
  // searchInput: string = '';

  handleSearch(searchInput: any) {
    console.log(searchInput.value);
    searchInput.value = '';
  }
}
