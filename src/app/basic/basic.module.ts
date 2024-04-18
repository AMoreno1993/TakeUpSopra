import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasicRoutingModule } from './basic-routing.module';
import { BasicComponent } from './components/basic.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [BasicComponent],
  imports: [CommonModule, BasicRoutingModule, FormsModule],
})
export class BasicModule {}
