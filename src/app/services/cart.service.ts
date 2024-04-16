import { Injectable } from '@angular/core';
import { Product } from '../models/products';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private _cartProductList: Product[] = [];

  private readonly cartProducts: BehaviorSubject<Product[]> =
    new BehaviorSubject<Product[]>([]);

  public cartProducts$: Observable<Product[]> =
    this.cartProducts.asObservable();

  constructor() {
    const storedCart = sessionStorage.getItem('cart');
    if (storedCart) {
      this._cartProductList = JSON.parse(storedCart);
      this.cartProducts.next([...this._cartProductList]);
    }
  }

  public addToCart(product: Product): void {
    this._cartProductList.push(product);
    this.cartProducts.next(this._cartProductList);
    this.updateSessionStorage;
  }

  public deleteFromCart(index: number): void {
    if (index !== -1) {
      this._cartProductList.splice(index, 1);
      this.cartProducts.next(this._cartProductList);
    }
    this.updateSessionStorage;
  }

  private updateSessionStorage() {
    sessionStorage.setItem('cart', JSON.stringify(this._cartProductList));
  }
}
