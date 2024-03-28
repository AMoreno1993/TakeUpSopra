import { Component } from '@angular/core';
import { productsData } from './products';
import { Image, Review } from './interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  listProducts = [...productsData];
  mainProduct = this.listProducts[0];

  /*  mainProduct: { reviews: Review[]; image: Image } = {
    reviews: [],
    image: { src: '' },
  }; */

  expensiveProducts = this.listProducts.filter(
    (product) => product.price > 2000
  );

  productClicked(id: number) {
    let index = this.listProducts.findIndex((product) => product.id == id);
    this.mainProduct = this.listProducts[index];
  }
}
