import { Injectable } from '@angular/core';
import { Product } from '../models/products';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private url = 'assets/productsJson.json';
  /* private _products: Observable<Product[]> = this.getProducts(); */

  constructor(private http: HttpClient) {}

  /* get products() {
    return this._products;
  } */

  getProducts() {
    return this.http.get<Product[]>(this.url);
  }
}
