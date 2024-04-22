import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { FormRoutingModule } from './form-routing.module';
import { FormComponent } from './components/form.component';

@NgModule({
  declarations: [FormComponent],
  imports: [CommonModule, FormRoutingModule, ReactiveFormsModule],
})
export class FormModule {}
