import { Product } from './Product';
import { Review } from './Review';

export interface IProduct {
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
