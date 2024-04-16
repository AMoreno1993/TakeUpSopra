import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from 'src/app/models/products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent {
  @Input() cartProductList: Product[] = [];
  @Output() deleteFromCart: EventEmitter<number> = new EventEmitter();

  deleteFromCartList(position: number) {
    this.deleteFromCart.emit(position);
  }
}
