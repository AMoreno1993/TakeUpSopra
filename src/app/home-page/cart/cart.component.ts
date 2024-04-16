import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../models/products';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent {
  cartProductList: Product[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.getCart();
  }
  private getCart() {
    this.cartService.cartProducts$.subscribe((cartProductList) => {
      console.log(cartProductList);
      this.initializeProducts(cartProductList);
    });
  }
  deleteFromCartList(position: number) {
    this.cartService.deleteFromCart(position);
  }

  private initializeProducts(productList: Product[]) {
    this.cartProductList = productList;
  }
}
