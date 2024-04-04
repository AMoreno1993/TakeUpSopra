import { Component } from '@angular/core';
import { Product } from '../models/products';
import { productsData } from '../products';

@Component({
  selector: 'app-product-main',
  templateUrl: './product-main.component.html',
  styleUrls: ['./product-main.component.scss'],
})
export class ProductMainComponent {
  originalProducts = [...productsData];
  products = [...productsData];
  selectedProduct: Product | null = null;

  ngOnInit(): void {
    this.selectedProduct = this.products[0];
  }
}
