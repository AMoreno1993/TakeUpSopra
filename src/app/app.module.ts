import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SimilarProductsComponent } from './similar-products/similar-products.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RatingComponent } from './rating/rating.component';
import { ReviewComponent } from './review/review.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { ProductMainComponent } from './product-main/product-main.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ProductMainComponent,
    RatingComponent,
    ReviewComponent,
    SideBarComponent,
    SimilarProductsComponent,
  ],
  imports: [CommonModule, BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
