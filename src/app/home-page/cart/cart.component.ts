import { Component, Input } from '@angular/core';
import { Product } from '../../models/products';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent {
  @Input() cartProductList!: Product[];
}
