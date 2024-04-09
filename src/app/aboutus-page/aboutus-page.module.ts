import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { AboutusRoutingModule } from './aboutus-routing.module';

@NgModule({
  declarations: [AboutUsComponent],
  imports: [CommonModule, AboutusRoutingModule],
})
export class AboutusPageModule {}
