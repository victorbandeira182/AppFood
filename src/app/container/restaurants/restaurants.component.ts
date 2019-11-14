import { Component, OnInit } from '@angular/core';

import {Restaurant} from './restaurant/restaurant.model';
import {RestaurantsService} from './restaurants.service';

@Component({
  selector: 'mt-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit {

  restaurants: Restaurant[]

  constructor(private restaurantsService: RestaurantsService) { }

  ngOnInit() {
<<<<<<< HEAD
    this.restaurantsService.restaurants()
      .subscribe(restaurants => this.restaurants = restaurants);
=======
  this.restaurantsService.restaurants()
    .subscribe(restaurants => this.restaurants = restaurants)
>>>>>>> 1c164a0cbcf833dfb5cf3841747525230a7f05c6
  }

}
