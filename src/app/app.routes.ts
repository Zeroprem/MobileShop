import { Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { CartComponent } from './cart/cart.component';
import { PopularPhonesComponent } from './popular-phones/popular-phones.component';


export const routes: Routes = [
  { path: '', component: ProductListComponent },
  { path: 'cart', component: CartComponent },
  { path: 'popular-phones', component: PopularPhonesComponent },
];
