import { Component, EventEmitter, Input, Output } from '@angular/core';
import { productsData } from './products';
import { Product } from './models/products';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  listProducts = [...productsData];
  @Input() mainProduct: Product | null = null;
  @Output() selectedProduct = new EventEmitter<number>();

  expensiveProducts = this.listProducts.filter(
    (product) => product.price > 2000
  );

  productClicked(id: number): void {
    this.selectedProduct.emit(id);
  }
}
