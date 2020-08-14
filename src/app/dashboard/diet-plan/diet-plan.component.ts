import {Component, Inject, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import {DietPlans, SocialAccounts} from './shared/diet-plan.model';
import { DietPlanService } from './shared/diet-plan.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogOverviewComponent } from './dialog-overview/dialog-overview.component';
import { RecipeComponent } from './recipe/recipe.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { HostListener } from '@angular/core'
import {
  trigger,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-diet-plan',
  templateUrl: './diet-plan.component.html',
  styleUrls: ['./diet-plan.component.scss'],
  animations: [
    trigger('responsiveAnimation', [
      transition('fullWidth => void', [
        style({ width: '*', opacity: 1 }),
        animate(500, style({ width: 0, opacity: 0 }))
      ]),
      transition('void => fullWidth', [
        style({ width: 0, opacity: 0 }),
        animate(500, style({ width: '*', opacity: 1 }))
      ]),
      transition('fullHeight => void', [
        style({ height: '*', opacity: 1 }),
        animate(500, style({ height: 0, opacity: 0 }))
      ]),
      transition('void => fullHeight', [
        style({ height: 0, opacity: 0 }),
        animate(500, style({ height: '*', opacity: 1 }))
      ])
    ]),
  ]
})

export class DietPlanComponent implements OnInit {

  selectedDiet = {};
  dietPlans: DietPlans[] = [];
  quantity: string;
  food: string;
  screenWidth: number;
  isDesktopAnimation = true;
  socialAccounts: SocialAccounts[] = [];

  constructor(public router: Router, public dialog: MatDialog, private dietPlanService: DietPlanService,
              public dashboardComponent: DashboardComponent) {
    this.changeDashboardSettings();
    this.onResize();

    this.dietPlanService.getDietPlans().then((data) => {
      this.dietPlans = data;
    });

    this.dietPlanService.getSocialAccounts().then((data) => {
      this.socialAccounts = data;
    });
  }

  ngOnInit(): void {
  }

  @HostListener('window:resize', ['$event'])
  onResize(event?): void {
    this.screenWidth = window.innerWidth;
    this.isDesktopAnimation = this.screenWidth >= 770;
  }

  changeDashboardSettings(): void {
    this.dashboardComponent.isIpadContent = false;
    this.dashboardComponent.isFixedHeader = false;
    this.dashboardComponent.isMobileFixedHeader = true;
    this.dashboardComponent.isTransparentHeader = false;
    this.dashboardComponent.title = 'diet plan';
    this.dashboardComponent.currentInfoDescription = 'diet plan';
    this.dashboardComponent.isShowInfoIcon = true;
    this.dashboardComponent.isShowShareIcon = false;
  }

  pushSocialAccounts(dietPlan): void {

    if (dietPlan.socialAccounts && dietPlan.socialAccounts.length === 0) {
      this.socialAccounts.map(item => {
        dietPlan.socialAccounts.push(item);
      });
    } else {
      const socialAccounts = [...dietPlan.socialAccounts];
      socialAccounts.map(() => {
        dietPlan.socialAccounts.splice(0, 1);
      });
    }
  }

  dietIsDone(dietPlan, weekKey, dayData, index): void {
    if (dietPlan.active) {
      dietPlan.isDone = true;
      this.changeDietStatus(dietPlan, weekKey, dayData, index);
    }
  }

  dietIsMissed(dietPlan, weekKey, dayData, index): void {
    if (dietPlan.active) {
      dietPlan.isMissed = true;
      this.changeDietStatus(dietPlan, weekKey, dayData, index);
    }
  }

  changeDietStatus(dietPlan, weekKey, dayData, index): void {
    this.dietPlans[weekKey].doneDietPlan.push(dietPlan);
    if (dayData.dietPlan[index + 1]) {
      this.dietPlans[weekKey].dietPlan[index + 1].active = true;
    }
    this.dietPlans[weekKey].dietPlan.splice(index, 1);
  }

  notDone(doneDiet, doneDietKey, dayDataKey): void {
    if (this.dietPlans[dayDataKey].doneDietPlan[doneDietKey]) {
      this.dietPlans[dayDataKey].doneDietPlan.splice(doneDietKey, 1);
      doneDiet.isDone = false;
      doneDiet.isMissed = false;
      doneDiet.active = true;
      if (this.dietPlans[dayDataKey].dietPlan.length > 0) {
        this.dietPlans[dayDataKey].dietPlan[0].active = false;
      }
      this.dietPlans[dayDataKey].dietPlan.unshift(doneDiet);
    }
  }

  openCheatMeals(dietPlan): void {
    this.selectedDiet = dietPlan;

    const dialogRef = this.dialog.open(DialogOverviewComponent, {
      width: '400px',
      panelClass: 'fullscreen-modal',
      data: {food: this.food, quantity: this.quantity},
    });

    dialogRef.afterClosed().subscribe(result => {

      if (result) {

        if (result.isCleanDiet) {
          const newData = result.finallyData;
          const nedDietPlan = dietPlan.ingredients.filter(item => (item.isCheat));
          dietPlan.ingredients = [...nedDietPlan, ...newData];
        } else {
          result.finallyData.map(item => dietPlan.ingredients.unshift(item));
        }
      }
    });
  }

  openRecipe(recipe, image, suggestion): void {
    this.dialog.open(RecipeComponent, {
      width: '400px',
      panelClass: 'full-height-modal',
      data: {recipe, image, suggestion}
    });
  }

  orderFood(): void {
    const redirectUrl = '/diet-plan/select-meals';
    this.router.navigate([redirectUrl]);
  }
}
