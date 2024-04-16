import { Component, inject } from '@angular/core';
import { Product } from 'src/app/models/products';
import { ProductService } from '../services/product.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  originalProducts: Product[] = [];
  products: Product[] = [];
  cartProductList: Product[] = [];
  productPosition = 0;
  selectedProduct!: Product;
  priceProduct = 2000;

  constructor(
    private _productService: ProductService,
    private _cartService: CartService
  ) {}

  ngOnInit(): void {
    this.getProductData();
  }

  selectProduct(product: Product): void {
    this.selectedProduct = product;
  }

  filterExpensiveProducts(): void {
    this.resetFilter();
    this.products = this.originalProducts.filter(
      (product) => product.price > this.priceProduct
    );
  }
  resetFilter(): void {
    this.products = this.originalProducts;
  }

  addToCart(): void {
    this._cartService.addToCart(this.selectedProduct);
  }

  private getProductData() {
    this._productService.products$.subscribe((productList) => {
      console.log(productList);
      this.initializeProducts(productList);
    });
  }

  private initializeProducts(productList: Product[] = []) {
    this.products = productList;
    this.originalProducts = productList;
    this.selectedProduct = this.products[this.productPosition];
  }
}
