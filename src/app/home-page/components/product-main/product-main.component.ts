import { Component, Input } from '@angular/core';
import { Product } from '../../../models/products';

@Component({
  selector: 'app-product-main',
  templateUrl: './product-main.component.html',
  styleUrls: ['./product-main.component.scss'],
})
export class ProductMainComponent {
  @Input() selectedProduct!: Product;
}
