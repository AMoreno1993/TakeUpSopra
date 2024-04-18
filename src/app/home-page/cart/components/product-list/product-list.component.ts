import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CartProduct } from 'src/app/models/cartProducts';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent {
  @Input() cartProductList: CartProduct[] = [];
  @Output() deleteFromCart: EventEmitter<number> = new EventEmitter();

  deleteFromCartList(position: number) {
    this.deleteFromCart.emit(position);
  }
}
