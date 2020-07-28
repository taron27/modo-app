import { Component, OnInit } from '@angular/core';
import {Weeks} from './shared/weeks.model';
import { SelectMealsService } from './shared/select-meals.service';
import { Router } from '@angular/router';
import { DashboardComponent } from '../../dashboard/dashboard.component';

@Component({
  selector: 'app-select-meals',
  templateUrl: './select-meals.component.html',
  styleUrls: ['./select-meals.component.scss']
})
export class SelectMealsComponent implements OnInit {

  weeks: Weeks[] = [];
  amount = 0;

  constructor(private selectMealsService: SelectMealsService,
              private router: Router,
              private dashboardComponent: DashboardComponent) {
    selectMealsService.getWeeks().then((data) => {
      this.weeks = data;
      data.map((item) => {
        item.meals.map((index) => {
          if (index.isSelect) {
            this.amount += index.price;
          }
        });
      });
      this.setDashboardSettings();
    });
  }

  ngOnInit(): void {
  }

  setDashboardSettings(): void {
    this.dashboardComponent.title = 'Select meals';
    this.dashboardComponent.currentInfoDescription = 'Select meals';
    this.dashboardComponent.isShowInfoIcon = true;

  }

  changeAllAmount(meal): void {
    if (meal.isSelect) {
      this.amount += meal.price;
    } else {
      this.amount -= meal.price;
    }
  }

  nextStep(): void {
    const redirectUrl = '/diet-plan/checkout';
    this.router.navigate([redirectUrl]);
  }

}
