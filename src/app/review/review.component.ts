import { Component } from '@angular/core';
import { Product } from '../models/products';
import { productsData } from '../products';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss'],
})
export class ReviewComponent {
  originalProducts = [...productsData];
  products = [...productsData];
  selectedProduct: Product | null = null;

  ngOnInit(): void {
    this.selectedProduct = this.products[0];
  }
}
