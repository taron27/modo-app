import {Component, Inject, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { DietPlans } from './shared/diet-plan.model';
import { DietPlanService } from './shared/diet-plan.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogOverviewComponent } from './dialog-overview/dialog-overview.component';

@Component({
  selector: 'app-diet-plan',
  templateUrl: './diet-plan.component.html',
  styleUrls: ['./diet-plan.component.scss']
})
export class DietPlanComponent implements OnInit {

  panelOpenState = false;

  weekDays = [
    {name: 'Mo', active: true},
    {name: 'Tu', active: false},
    {name: 'We', active: false},
    {name: 'Th', active: false},
    {name: 'Fr', active: false},
    {name: 'Sa', active: false},
    {name: 'Su', active: false},
  ];
  selectedDiet = {};

  dietPlans: DietPlans[] = [];

  doneDiets = [];
  quantity: string;
  food: string;

  constructor(public router: Router, public dialog: MatDialog, private dietPlanService: DietPlanService) {
    this.dietPlans.map((item, key) => {
      if (item.isDone || item.isMissed) {
        this.doneDiets.push(item);
        this.dietPlans.splice(key, 1);
      }
    });

    this.dietPlanService.getDietPlans().then((data) => {
      this.dietPlans = data;
    });
  }

  ngOnInit(): void {
  }

  changeCurrentWeekDay(weekDay): void {
    const currentWeekDay = this.weekDays.find((item) => (item.active === true));
    if (currentWeekDay) {
      currentWeekDay.active = false;
    }
    weekDay.active = true;
  }

  dietIsDone(dietPlan, index): void {
    if (dietPlan.active) {
      dietPlan.isDone = true;
      this.changeDietStatus(dietPlan, index);
    }
  }

  dietIsMissed(dietPlan, index): void {
    if (dietPlan.active) {
      dietPlan.isMissed = true;
      this.changeDietStatus(dietPlan, index);
    }
  }

  changeDietStatus(dietPlan, index): void {
    this.doneDiets.push(dietPlan);
    if (this.dietPlans[index + 1]) {
      this.dietPlans[index + 1].active = true;
    }
    this.dietPlans.splice(index, 1);
  }

  openCheatMeals(dietPlan): void {
    this.selectedDiet = dietPlan;

    const dialogRef = this.dialog.open(DialogOverviewComponent, {
      width: '370px',
      data: {food: this.food, quantity: this.quantity}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        let cheatIngredient = [];
        if (result.isCleanDiet) {
          cheatIngredient = dietPlan.ingredients.filter(item => {
            if (item.isCheat) {
              return item;
            }
          });
          cheatIngredient.push(result.finallyData);
          dietPlan.ingredients = cheatIngredient;
        } else {
          dietPlan.ingredients.push(result.finallyData);
        }
      }
    });
  }

  orderFood(): void {
    const redirectUrl = '/diet-plan/select-meals';
    this.router.navigate([redirectUrl]);
  }
}
