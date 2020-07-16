import { Injectable } from '@angular/core';
import { FOODS } from './mock-foods';
import { Foods } from './foods.model';

@Injectable({
  providedIn: 'root'
})

export class FoodService {
  getFoods(): Promise<Foods[]> {
    return Promise.resolve<Foods[]>(FOODS);
  }
}
