import { Component, Input } from '@angular/core';
import { Product } from '../../../models/products';

@Component({
  selector: 'app-similar-products',
  templateUrl: './similar-products.component.html',
  styleUrls: ['./similar-products.component.scss'],
})
export class SimilarProductsComponent {
  @Input() selectedProduct!: Product;
}
