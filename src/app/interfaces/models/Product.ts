import { IProductContract } from '../contracts/IProductContract';
import { IProduct } from './IProduct';
import { Review } from './Review';

export class Product implements IProduct {
  id: number;
  product: string;
  price: number;
  currency: string;
  rating: number;
  img: string;
  description: string;
  similarProducts?: Product[];
  reviews?: Review[] | null;
  onCart?: boolean | null;

  constructor(private iProductContract: IProductContract) {
    this.id = iProductContract.id;
    this.product = iProductContract.product;
    this.price = iProductContract.price;
    this.currency = iProductContract.currency;
    this.rating = iProductContract.rating;
    this.img = iProductContract.img;
    this.description = iProductContract.description;

    if (iProductContract.similarProducts) {
      this.similarProducts = iProductContract.similarProducts.map(
        (product) => new Product(product)
      );
    }
    if (iProductContract.reviews) {
      this.reviews = iProductContract.reviews.map(
        (review) => new Review(review)
      );
    }
    this.onCart = iProductContract.onCart;
  }
}
