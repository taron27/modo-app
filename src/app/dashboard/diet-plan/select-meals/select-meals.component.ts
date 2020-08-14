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
              private router: Router, public dashboardComponent: DashboardComponent) {
    this.changeDashboardSettings();

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

  changeDashboardSettings(): void {
    this.dashboardComponent.isIpadContent = true;
    this.dashboardComponent.isFixedHeader = false;
    this.dashboardComponent.isMobileFixedHeader = false;
    this.dashboardComponent.isTransparentHeader = false;
    this.dashboardComponent.title = 'Select Meals';
    this.dashboardComponent.currentInfoDescription = 'Select Meals';
    this.dashboardComponent.isShowInfoIcon = false;
    this.dashboardComponent.isShowShareIcon = false;
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
