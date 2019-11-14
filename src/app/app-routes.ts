import {Routes} from '@angular/router';
import {HomeComponent} from './container/home/home.component';
import {AboutComponent} from './container/about/about.component';
import {RestaurantsComponent} from './container/restaurants/restaurants.component';
import {RestaurantDetailComponent} from './container/restaurant-detail/restaurant-detail.component';
import {MenuComponent} from './container/restaurant-detail/menu/menu.component';
import {ReviewsComponent} from './container/restaurant-detail/reviews/reviews.component';

export const ROUTES: Routes = [
  {path: '', component: HomeComponent},
  {path: 'restaurants', component: RestaurantsComponent},
  {path: 'restaurants/:id', component: RestaurantDetailComponent,
    children: [
      {path: '', redirectTo: 'menu', pathMatch: 'full'},
      {path: 'menu', component: MenuComponent},
      {path: 'reviews', component: ReviewsComponent}
    ]},
  {path: 'about', component: AboutComponent},
]
