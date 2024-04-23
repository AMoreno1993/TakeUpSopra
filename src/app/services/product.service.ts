import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { ValidatorFn, AbstractControl } from '@angular/forms';
import { Product } from '../interfaces/models/Product';
import { IProductContract } from '../interfaces/contracts/IProductContract';

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
    this.http
      .get<IProductContract[]>(this.url)
      .pipe(
        map((data: IProductContract[]) => {
          return data.map((item) => new Product(item));
        })
      )
      .subscribe({
        next: (products: Product[]) => {
          this._products = products;
          this.products.next(this._products);
        },
        error: (error) => 'Error al obtener la lista de productos' + error,
      });
  }

  setProduct(product: Product): void {
    this._products.push(product);
    this.products.next(this._products);
  }
}
