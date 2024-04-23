import { ICartProductContract } from '../contracts/ICartProductContract';
import { ICartProduct } from './ICartProduct';
import { Product } from './Product';

export class CartProduct implements ICartProduct {
  product: Product;
  quantity: number;

  constructor(private iCartProductContract: ICartProductContract) {
    this.product = iCartProductContract.product;
    this.quantity = iCartProductContract.quantity;
  }
}
