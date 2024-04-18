import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../models/products';
import { CartService } from 'src/app/services/cart.service';
import { CartProduct } from 'src/app/models/cartProducts';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent {
  cartProductList: CartProduct[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.getCart();
  }
  private getCart() {
    this.cartService.cartProducts$.subscribe((cartProductList) => {
      this.initializeProducts(cartProductList);
    });
  }
  deleteFromCartList(position: number) {
    this.cartService.deleteFromCart(position);
  }

  addQuantity(product: Product) {
    this.cartService.addToCart(product);
  }

  private initializeProducts(productList: CartProduct[]) {
    this.cartProductList = productList;
  }
}
