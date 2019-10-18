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


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    RestaurantsComponent,
    RestaurantComponent,
    FooterComponent
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
