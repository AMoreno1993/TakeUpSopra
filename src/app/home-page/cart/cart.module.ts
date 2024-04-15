import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { CartComponent } from './cart.component';
import { ProductListComponent } from './components/product-list/product-list.component';

@NgModule({
  declarations: [CartComponent, ProductListComponent],
  imports: [CommonModule, CartRoutingModule],
})
export class CartModule {}
