import { type Review } from './review';

export interface Product {
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
