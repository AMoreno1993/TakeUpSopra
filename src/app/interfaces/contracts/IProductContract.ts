import { Product } from '../models/Product';
import { Review } from '../models/Review';

export interface IProductContract {
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
}
