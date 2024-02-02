import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SingleProductComponent } from '../single-product/single-product.component';
import { ProductListingService } from '../../../../service/productListing/product-listing.service';
import { ProductFilteringComponent } from '../product-filtering/product-filtering.component';

@Component({
  selector: 'ProductListing',
  standalone: true,
  imports: [CommonModule, ProductFilteringComponent, SingleProductComponent],
  templateUrl: './product-listing.component.html',
  styleUrl: './product-listing.component.scss',
})
export class ProductListingComponent {
  // productListing : {
  //   id?: number,
  //   name?: string,
  //   description?: string,
  //   brand?: string,
  //   gender?:string,
  //   category?:string,
  //   size?:number[],
  //   color?:string[],
  //   price?:number,
  //   discountPrice?:number,
  //   is_in_inventory?:boolean,
  //   item_left?:number,
  //   imageURL?:string,
  //   slug?: string

  // }[] = [];

  originalProductListing: any; // Store the original data
  productListing: any;

  constructor(ProductListingService: ProductListingService) {
    this.originalProductListing = ProductListingService.getAllProducts();
    this.productListing = [...this.originalProductListing]; // Create a copy to avoid modifying the original data
  }

  receiveStock(selected: any) {
    let temp = this.originalProductListing.filter((item: any) => {
      if (selected === 'all') {
        return true;
      } else if (selected === 'inStock') {
        return item.is_in_inventory === true;
      } else {
        return item.is_in_inventory === false;
      }
    });

    this.productListing = [...temp]; // Update the displayed data with the filtered array
  }
}
