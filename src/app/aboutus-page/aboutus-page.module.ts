import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { AboutusRoutingModule } from './aboutus-routing.module';
import { MoreInfoComponent } from './components/more-info/more-info.component';
import { SubscribeComponent } from './components/subscribe/subscribe.component';

@NgModule({
  declarations: [
    AboutUsComponent,
    SubscribeComponent,
    MoreInfoComponent,
    AboutUsComponent,
  ],
  imports: [CommonModule, AboutusRoutingModule],
})
export class AboutusPageModule {}
