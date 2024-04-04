import { NgModule } from '@angular/core';
import { RouterModule, type Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RatingComponent } from './rating/rating.component';
import { ReviewComponent } from './review/review.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { SimilarProductsComponent } from './similar-products/similar-products.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
