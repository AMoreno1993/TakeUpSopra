import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./home-page/home-page.module').then((m) => m.HomePageModule),
  },
  {
    path: 'aboutUs',
    loadChildren: () =>
      import('./aboutus-page/aboutus-page.module').then(
        (m) => m.AboutusPageModule
      ),
  },
  {
    path: 'success',
    loadChildren: () =>
      import('./success/success.module').then((m) => m.SuccessModule),
  },
  {
    path: 'cart',
    loadChildren: () =>
      import('./home-page/cart/cart.module').then((m) => m.CartModule),
  },
  {
    path: 'form',
    loadChildren: () => import('./form/form.module').then((m) => m.FormModule),
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
