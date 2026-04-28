import { Routes } from '@angular/router';
import { Notfound } from './components/notfound/notfound';
import { Home } from './components/home/home';
import { ProductDetails } from './components/product-details/product-details';
import { Products } from './components/products/products';

export const routes: Routes = [
  { path: '', component: Home, pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'products', component: Products },
  { path: 'products/:id', component: ProductDetails },
  { path: '**', component: Notfound },
];
