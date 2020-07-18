import { Component, OnInit } from '@angular/core';
import {Weeks} from './shared/weeks.model';
import { SelectMealsService } from './shared/select-meals.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-select-meals',
  templateUrl: './select-meals.component.html',
  styleUrls: ['./select-meals.component.scss']
})
export class SelectMealsComponent implements OnInit {

  weeks: Weeks[] = [];
  amount = 0;

  constructor(private selectMealsService: SelectMealsService, private router: Router) {
    selectMealsService.getWeeks().then((data) => {
      this.weeks = data;
      data.map((item) => {
        item.meals.map((index) => {
          if (index.isSelect) {
            this.amount += index.price;
          }
        });
      });
    });
  }

  ngOnInit(): void {
  }

  changeAllAmount(meal): void {
    if (meal.isSelect) {
      this.amount += meal.price;
    } else {
      this.amount -= meal.price;
    }
  }

  nextStep(): void {
    const redirectUrl = '/checkout';
    this.router.navigate([redirectUrl]);
  }

}
