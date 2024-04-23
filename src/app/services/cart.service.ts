import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable } from 'rxjs';
import { CartProduct } from '../interfaces/models/CartProduct';
import { Product } from '../interfaces/models/Product';
import { ICartProduct } from '../interfaces/models/ICartProduct';
import { ICartProductContract } from '../interfaces/contracts/ICartProductContract';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private _cartProductList: CartProduct[] = [];

  private readonly cartProducts: BehaviorSubject<CartProduct[]> =
    new BehaviorSubject<CartProduct[]>([]);

  public cartProducts$: Observable<CartProduct[]> =
    this.cartProducts.asObservable();

  constructor() {}

  public initializeCart() {
    const storedCart = sessionStorage.getItem('cart');
    if (storedCart) {
      const cartFromStorage: ICartProductContract[] = JSON.parse(storedCart);
      this._cartProductList = cartFromStorage.map(
        (item) => new CartProduct(item)
      );
      this.cartProducts.next(this._cartProductList);
    }
  }

  public addToCart(product: Product): void {
    this.incrementNumProduct(product);
    this.cartProducts.next(this._cartProductList);
    this.updateSessionStorage();
  }

  private incrementNumProduct(product: Product): void {
    let cartProduct: CartProduct | undefined;
    if ((cartProduct = this.findProductOnCard(product))) {
      cartProduct.quantity += 1;
    } else {
      const newCartProduct = new CartProduct({ product, quantity: 1 });
      this._cartProductList.push(newCartProduct);
    }
  }

  private findProductOnCard(product: Product): CartProduct {
    let cartProduct = this._cartProductList.find(
      (cartproduct) => cartproduct.product.id === product.id
    );
    product.onCart = true;
    return cartProduct!;
  }

  public deleteFromCart(index: number): void {
    if (index !== -1) {
      const deletedProduct = this._cartProductList[index];
      this._cartProductList.splice(index, 1);
      deletedProduct.product.onCart = false;
      this.cartProducts.next(this._cartProductList);
      this.updateSessionStorage();
    }
  }

  private updateSessionStorage() {
    sessionStorage.setItem('cart', JSON.stringify(this._cartProductList));
  }
}
