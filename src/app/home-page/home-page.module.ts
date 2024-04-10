import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductMainComponent } from './components/product-main/product-main.component';
import { RatingComponent } from './components/rating/rating.component';
import { ReviewComponent } from './components/review/review.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { SimilarProductsComponent } from './components/similar-products/similar-products.component';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [
    ProductMainComponent,
    RatingComponent,
    ReviewComponent,
    SideBarComponent,
    SimilarProductsComponent,
    HomeComponent,
  ],
  imports: [CommonModule, HomeRoutingModule],
})
export class HomePageModule {}
