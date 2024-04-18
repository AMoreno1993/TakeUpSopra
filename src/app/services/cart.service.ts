import { Injectable } from '@angular/core';
import { Product } from '../models/products';
import { BehaviorSubject, Observable } from 'rxjs';
import { CartProduct } from '../models/cartProducts';

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
      this._cartProductList = JSON.parse(storedCart);
      this.cartProducts.next(this._cartProductList);
    }
  }

  public addToCart(product: Product): void {
    this.incrementNumProduct(product);
    this.cartProducts.next(this._cartProductList);
    this.updateSessionStorage();
  }

  private incrementNumProduct(product: Product): void {
    let cartProduct;
    if ((cartProduct = this.findProductOnCard(product))) {
      cartProduct.quantity += 1;
    } else {
      this._cartProductList.push({ product, quantity: 1 });
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
      this._cartProductList.splice(index, 1);
      this._cartProductList[index].product.onCart = false;
      this.cartProducts.next(this._cartProductList);
    }

    this.updateSessionStorage();
  }

  private updateSessionStorage() {
    sessionStorage.setItem('cart', JSON.stringify(this._cartProductList));
  }
}
