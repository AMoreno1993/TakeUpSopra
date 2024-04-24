import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { RatingComponent } from './rating.component';

class RatingComponentMock {
  rating!: number;

  hasHalfStar(rating: number): boolean {
    return rating % 1 > 0;
  }

  getStarList(rating: number): string[] {
    const fullStars = Math.trunc(rating);
    const stars = new Array(5).fill('bi-star');
    stars.fill('bi-star-fill', 0, fullStars);
    if (this.hasHalfStar(rating)) stars[fullStars] = 'bi-star-half';
    return stars;
  }

  getStarsColor(rating: number): string {
    const color = rating < 3 ? 'red' : rating < 4 ? 'orange' : 'green';
    return color;
  }

  changeRating(newRating: number): void {
    this.rating = newRating;
  }
}

fdescribe('RatingComponent', () => {
  let component: RatingComponent;
  let fixture: ComponentFixture<RatingComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [RatingComponent],
      providers: [
        {
          provide: RatingComponent,
          useClass: RatingComponentMock,
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(RatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should have input rating', () => {
    const ratingMock = 3;
    component.rating = ratingMock;
    expect(component.rating).toEqual(ratingMock);
  });
  it('rating range', () => {
    component.rating = 3;
    component.changeRating(4);
    expect(component.rating).toBeLessThanOrEqual(5);
    expect(component.rating).toBeGreaterThan(0);
  });

  it('hasHalfStar should return false', () => {
    const ratingMock = 4;
    const result = component.hasHalfStar(ratingMock);
    expect(result).toBe(false);
  });

  it('should return correct star list', () => {
    const ratingMock = 3.5;
    spyOn(component, 'getStarList').and.callThrough();
    const starList = component.getStarList(ratingMock);
    expect(component.getStarList).toHaveBeenCalled();
    expect(starList).toEqual([
      'bi-star-fill',
      'bi-star-fill',
      'bi-star-fill',
      'bi-star-half',
      'bi-star',
    ]);
  });

  it('should return correct color', () => {
    const ratingMock = 3.5;
    spyOn(component, 'getStarsColor').and.callThrough();
    const starColor = component.getStarsColor(ratingMock);
    expect(component.getStarsColor).toHaveBeenCalled();
    expect(starColor).toEqual('orange');
  });

  it('should update rating value', () => {
    const ratingMock = 4;
    component.changeRating(ratingMock);
    expect(component.rating).toEqual(ratingMock);
  });
});
