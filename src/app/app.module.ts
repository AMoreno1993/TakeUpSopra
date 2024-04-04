import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './app/home/home.component';
import { ProductMainComponent } from './product-main/product-main.component';
import { SimilarProductsComponent } from './similar-products/similar-products.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RatingComponent } from './rating/rating.component';
import { ReviewComponent } from './review/review.component';
import { SideBarComponent } from './side-bar/side-bar.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, ProductMainComponent, SimilarProductsComponent, NavBarComponent, RatingComponent, ReviewComponent, SideBarComponent],
  imports: [CommonModule, BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
