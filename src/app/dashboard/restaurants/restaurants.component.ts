import { Component, OnInit } from '@angular/core';
import { RestaurantService } from './shared/restaurants.service';
import { Restaurants } from './shared/restaurants.model';
import { DashboardComponent } from '../dashboard/dashboard.component';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.scss']
})
export class RestaurantsComponent implements OnInit {

  lat = 51.678418;
  lng = 7.809007;
  restaurants: Restaurants[] = [];

  constructor(public restaurantService: RestaurantService, public dashboardComponent: DashboardComponent) {
    this.changeDashboardSettings();
    restaurantService.getRestaurants().then(data => {
      this.restaurants = data;
    });
  }

  ngOnInit(): void {
  }

  changeDashboardSettings(): void {
    this.dashboardComponent.isIpadContent = false;
    this.dashboardComponent.isFixedHeader = false;
    this.dashboardComponent.isMobileFixedHeader = false;
    this.dashboardComponent.isTransparentHeader = true;
    this.dashboardComponent.title = 'Restaurant';
    this.dashboardComponent.currentInfoDescription = 'Restaurant';
    this.dashboardComponent.isShowInfoIcon = false;
    this.dashboardComponent.isShowShareIcon = false;
  }

  rateRestaurant(restaurant, newRate): void {
    restaurant.rateForHover = newRate;
  }

  endRateRestaurant(restaurant): void {
    restaurant.rateForHover = restaurant.rate;
  }

  setNewRateRestaurant(restaurant, newRate): void {
    restaurant.rateForHover = newRate;
    restaurant.rate = newRate
  }
}
