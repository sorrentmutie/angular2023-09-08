import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { RandomUsersComponent } from './randomusers/pages/random-users/random-users.component';
import { StoreComponent } from './products/pages/store/store.component';
import { ProductsInStockComponent } from './products/pages/products-in-stock/products-in-stock.component';
import { ProductDetailsComponent } from './products/pages/product-details/product-details.component';
import { MyHeroComponent } from './forms/my-hero/my-hero.component';

const routes: Routes = [
  { path:'first', component: FirstComponent},
  { path:'second', component: SecondComponent},
  { path: 'random', component: RandomUsersComponent},
  { path: 'store', component: StoreComponent  },
  { path: 'stock', component: ProductsInStockComponent},
  { path: 'stock/:id', component: ProductDetailsComponent},
  {path: 'myhero', component: MyHeroComponent},
  { path: '', redirectTo: '/myhero', pathMatch: 'full'},
  { path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
