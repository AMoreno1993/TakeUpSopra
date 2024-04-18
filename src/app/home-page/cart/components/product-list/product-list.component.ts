import {
  Component,
  EventEmitter,
  Input,
  Output,
  numberAttribute,
} from '@angular/core';
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

  incrementQuantity(cartProduct: CartProduct): void {
    cartProduct.quantity += 1;
  }

  decrementQuantity(cartProduct: CartProduct, position: number): void {
    if (cartProduct.quantity == 1) {
      this.deleteFromCartList(position);
    } else {
      cartProduct.quantity -= 1;
    }
  }
}
