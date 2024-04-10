import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutusRoutingModule } from './aboutus-routing.module';
import { MoreInfoComponent } from './components/more-info/more-info.component';
import { SubscribeComponent } from './components/subscribe/subscribe.component';
import { DescriptionComponent } from './components/description/description.component';
import { AboutUsComponent } from './about-us.component';

@NgModule({
  declarations: [
    AboutUsComponent,
    SubscribeComponent,
    MoreInfoComponent,
    DescriptionComponent,
  ],
  imports: [CommonModule, AboutusRoutingModule],
})
export class AboutusPageModule {}
