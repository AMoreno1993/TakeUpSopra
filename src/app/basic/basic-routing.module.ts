import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicComponent } from './components/basic.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'main', component: BasicComponent },
      { path: '**', redirectTo: 'main' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BasicRoutingModule {}
