import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SucessComponent } from './components/sucess.component';

const routes: Routes = [
  {
    path: '',
    component: SucessComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SuccessRoutingModule {}
