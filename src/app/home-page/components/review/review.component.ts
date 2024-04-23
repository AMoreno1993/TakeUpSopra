import { Component, Input } from '@angular/core';
import { Product } from 'src/app/interfaces/models/Product';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss'],
})
export class ReviewComponent {
  @Input() selectedProduct!: Product;
}
