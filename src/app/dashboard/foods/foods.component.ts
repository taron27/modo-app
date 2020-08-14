import { Component, OnInit } from '@angular/core';
import { FoodService  } from './shared/foods.service';
import { Foods } from './shared/foods.model';
import { DashboardComponent } from '../dashboard/dashboard.component';

@Component({
  selector: 'app-foods',
  templateUrl: './foods.component.html',
  styleUrls: ['./foods.component.scss']
})
export class FoodsComponent implements OnInit {

  foods: Foods[] = [];
  disabledFoods = [];
  foodsCopy = [];

  constructor(private foodService: FoodService, public dashboardComponent: DashboardComponent) {
  this.changeDashboardSettings();
  foodService.getFoods().then((foods) => {
      this.foods = foods;
      this.foodsCopy = [...foods];
    });
  }

  ngOnInit(): void {
  }

  changeDashboardSettings(): void {
    this.dashboardComponent.isIpadContent = false;
    this.dashboardComponent.isFixedHeader = false;
    this.dashboardComponent.isMobileFixedHeader = true;
    this.dashboardComponent.isTransparentHeader = false;
    this.dashboardComponent.title = 'Foods';
    this.dashboardComponent.currentInfoDescription = 'Foods';
    this.dashboardComponent.isShowInfoIcon = false;
    this.dashboardComponent.isShowShareIcon = false;
  }

  saveChanges(): void {
    const foodsToDisabled = this.foods.filter(item => !item.isEnabled);
    const enabledFoods = this.foods.filter(item => item.isEnabled);
    const foodsToEnabled = this.disabledFoods.filter(item => item.isEnabled);
    const disabledFoods = this.disabledFoods.filter(item => !item.isEnabled);

    this.disabledFoods = [...foodsToDisabled, ...disabledFoods];
    this.foods = [...enabledFoods, ...foodsToEnabled];
  }

}
