import { Injectable } from '@angular/core';
import { Product } from '../models/products';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private url = 'assets/productsJson.json';
  private readonly products: BehaviorSubject<Product[]> = new BehaviorSubject<
    Product[]
  >([]);
  private _products: Product[] = [];
  public products$: Observable<Product[]> = this.products.asObservable();

  constructor(private http: HttpClient) {}

  initializeProducts(): void {
    this.http.get<Product[]>(this.url).subscribe({
      next: (products: Product[]) => {
        this._products = products;
        this.products.next(this._products);
      },
      error: (error) => 'Error al obtener la lista de productos' + error,
    });
  }
}
