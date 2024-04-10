import { Component } from '@angular/core';
import { Product } from 'src/app/models/products';
import { productsData } from 'src/app/products';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  originalProducts: Product[] = [...productsData];
  products: Product[] = [...productsData];
  selectedProduct!: Product;
  productPosition = 0;
  priceProduct = 2000;

  ngOnInit(): void {
    this.selectedProduct = this.products[this.productPosition];
  }

  productClicked(id: number): void {
    const product = this.products.find((product) => product.id === id);
    if (product != null) {
      this.selectedProduct = product;
    }
  }

  expensiveProducts(): void {
    this.resetFilter();
    this.products = this.originalProducts.filter(
      (product) => product.price > this.priceProduct
    );
  }
  resetFilter(): void {
    this.products = this.originalProducts;
  }
}
