import { Component, EventEmitter, Input, Output } from '@angular/core';
import { productsData } from './products';
import { Product } from './models/products';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  originalProducts: Product[] = [...productsData];
  products: Product[] = [...productsData];
  selectedProduct: Product | null = null;
  productPosition = 0;

  ngOnInit(): void {
    this.selectedProduct = this.products[this.productPosition];
  }

  productClicked(id: number): void {
    const product = this.products.find((product) => product.id === id);
    if (product != null) {
      this.selectedProduct = product ?? null;
    }
  }

  expensiveProducts(): void {
    this.resetFilter();
    this.products = this.originalProducts.filter(
      (product) => product.price > 2000
    );
  }
  resetFilter(): void {
    this.products = this.originalProducts;
  }
}
