import { Component, OnInit } from '@angular/core';
import { FoodService  } from './shared/foods.service';
import { Foods } from './shared/foods.model';

@Component({
  selector: 'app-foods',
  templateUrl: './foods.component.html',
  styleUrls: ['./foods.component.scss']
})
export class FoodsComponent implements OnInit {

  foods: Foods[] = [];
  disabledFoods = [];
  foodsCopy = [];

  constructor(private foodService: FoodService) {
    foodService.getFoods().then((foods) => {
      this.foods = foods;
      this.foodsCopy = [...foods];
    });
  }

  ngOnInit(): void {
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
