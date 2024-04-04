import { Component } from '@angular/core';
import { productsData } from '../products';
import { Product } from '../models/products';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
})
export class SideBarComponent {
  originalProducts = [...productsData];
  products = [...productsData];
  selectedProduct: Product | null = null;

  ngOnInit(): void {
    this.selectedProduct = this.products[0];
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
