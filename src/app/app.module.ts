import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import {HeaderComponent} from './container/header/header.component';
import {HomeComponent} from './container/home/home.component';
import {AboutComponent} from './container/about/about.component';
import {ROUTES} from './app-routes';
import {RestaurantsComponent} from './container/restaurants/restaurants.component';
import {RestaurantComponent} from './container/restaurants/restaurant/restaurant.component';
import {FooterComponent} from './container/footer/footer.component';
import {RestaurantsService} from './container/restaurants/restaurants.service';
import {RestaurantDetailComponent} from './container/restaurant-detail/restaurant-detail.component';
import {MenuComponent} from './container/restaurant-detail/menu/menu.component';
import {MenuItemComponent} from './container/restaurant-detail/menu-item/menu-item.component';
import {ShoppingCartComponent} from './container/restaurant-detail/shopping-cart/shopping-cart.component';
import {ReviewsComponent} from './container/restaurant-detail/reviews/reviews.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    RestaurantsComponent,
    RestaurantComponent,
    FooterComponent,
    RestaurantDetailComponent,
    MenuComponent,
    ShoppingCartComponent,
    MenuItemComponent,
    ReviewsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [RestaurantsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
