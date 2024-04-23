import { Product } from '../models/Product';

export interface ICartProductContract {
  product: Product;
  quantity: number;
}
