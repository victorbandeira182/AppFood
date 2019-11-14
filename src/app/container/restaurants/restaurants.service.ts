<<<<<<< HEAD
import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
=======
import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
>>>>>>> 1c164a0cbcf833dfb5cf3841747525230a7f05c6

import {Restaurant} from './restaurant/restaurant.model';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch'

import {MEAT_API} from '../../app.api';
import {Observable} from 'rxjs';
import {ErrorHandler} from '../../app.error-handler';

<<<<<<< HEAD
@Injectable()
export class RestaurantsService {


  constructor(private http: Http){}

  restaurants(): Observable<Restaurant[]> {
    return this.http.get(`${MEAT_API}/restaurants`)
      .map(response => response.json())
      .catch(ErrorHandler.handleError)
  }
  restaurantById(id: string): Observable<Restaurant>{
    return this.http.get(`${MEAT_API}/restaurants/${id}`)
      .map(response => response.json())
      .catch(ErrorHandler.handleError)
=======
import {MEAT_API} from '../../app.api';
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
import {ErrorHandler} from "../../app.error-handler";



@Injectable()
export class RestaurantsService {

  constructor(private http: Http){}

  restaurants(): Observable<Restaurant[]>{
    return this.http.get(`${MEAT_API}/restaurants`)
      .map(response => response.json())
      .catch(ErrorHandler.handleErro)
>>>>>>> 1c164a0cbcf833dfb5cf3841747525230a7f05c6
  }

  reviewsOfRestaurant(id: string): Observable<any> {
    return this.http.get(`${MEAT_API}/restaurats/${id}/reviews`)
      .map(response => response.json())
      .catch(ErrorHandler.handleError)
  }
}






