import { Injectable } from '@angular/core';
import { Restaurants } from './restaurants.model';
import { RESTAURANTS } from './mock-restaurant';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {
  getRestaurants(): Promise<Restaurants[]> {
    return Promise.resolve<Restaurants[]>(RESTAURANTS);
  }
}
