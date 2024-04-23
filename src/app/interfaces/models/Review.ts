import { IReviewContract } from '../contracts/IReviewContract';
import { IReview } from './IReview';

export class Review implements IReview {
  img: string;
  name: string;
  rating: number;
  opinion: string;
  date: string;

  constructor(private iReviewContract: IReviewContract) {
    this.img = iReviewContract.img;
    this.name = iReviewContract.name;
    this.rating = iReviewContract.rating;
    this.opinion = iReviewContract.opinion;
    this.date = iReviewContract.date;
  }
}
