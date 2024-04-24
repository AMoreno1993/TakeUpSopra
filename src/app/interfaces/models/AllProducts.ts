import { IProductContract } from '../contracts/IProductContract';
import { Product } from './Product';

export class AllProducts {
  all: Product[];

  constructor(private iProductContract: IProductContract[]) {
    this.all = iProductContract.map((product) => new Product(product));
  }
}
