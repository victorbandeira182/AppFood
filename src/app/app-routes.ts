import {Routes} from '@angular/router';
import {HomeComponent} from './container/home/home.component';
import {AboutComponent} from './container/about/about.component';
import {RestaurantsComponent} from './container/restaurants/restaurants.component';

export const ROUTES: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'restaurants', component: RestaurantsComponent},





]
