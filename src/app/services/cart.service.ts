import { Injectable } from '@angular/core';
import { Product } from '../models/products';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartProductList: Product[] = [];

  constructor() {}

  public addToCart(product: Product): void {
    this.cartProductList.push(product);
  }

  public deleteFromCart(id: number) {
    this.cartProductList = this.cartProductList.filter((p) => p.id !== id);
  }
}
