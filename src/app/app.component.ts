import { Component, OnInit } from '@angular/core';
import { ProductService } from './services/product.service';
import { CartService } from './services/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(
    private productService: ProductService,
    private cartService: CartService
  ) {}

  //AQUI INICIALIZO EL CARRITO , NO EN EL CONSTRUCTOR DEL SERVICE
  ngOnInit(): void {
    this.productService.initializeProducts();
    this.cartService.initializeCart();
  }
}
