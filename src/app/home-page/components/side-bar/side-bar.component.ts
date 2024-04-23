import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from 'src/app/interfaces/models/Product';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
})
export class SideBarComponent {
  @Input() products!: Product[];
  @Input() selectedProduct!: Product;

  @Output() onSelectedProduct: EventEmitter<Product> = new EventEmitter();
  @Output() clickedReset: EventEmitter<void> = new EventEmitter();
  @Output() filterExpensiveProducts: EventEmitter<void> = new EventEmitter();

  selectProduct(product: Product): void {
    this.onSelectedProduct.emit(product);
  }

  resetProducts(): void {
    this.clickedReset.emit();
  }

  expensiveProducts(): void {
    this.filterExpensiveProducts.emit();
  }
}
