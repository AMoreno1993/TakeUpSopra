import { Component } from '@angular/core';
import { Product } from '../models/products';
import { productsData } from '../products';

@Component({
  selector: 'app-similar-products',
  templateUrl: './similar-products.component.html',
  styleUrls: ['./similar-products.component.scss'],
})
export class SimilarProductsComponent {
  originalProducts = [...productsData];
  products = [...productsData];
  selectedProduct: Product | null = null;

  ngOnInit(): void {
    this.selectedProduct = this.products[0];
  }
}
