import { Component, Input } from '@angular/core';
import { Product } from '../models/products';
import { productsData } from '../products';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss'],
})
export class ReviewComponent {
  @Input() selectedProduct!: Product;
}
