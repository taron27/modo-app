import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { SubscriptionComponent } from './subscription/subscription.component';
import { MatRippleModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { UserInfoComponent } from './user-info/user-info.component';
import { DietInfoComponent } from './diet-info/diet-info.component';
import { DietPlanComponent } from './diet-plan/diet-plan.component';
import { CheatMealsComponent } from './cheat-meals/cheat-meals.component';
import { RecipesComponent } from './recipes/recipes.component';
import { SelectMealsComponent } from './select-meals/select-meals.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { FoodsComponent } from './foods/foods.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { ChatComponent } from './chat/chat.component';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    SubscriptionComponent,
    DashboardComponent,
    UserInfoComponent,
    DietInfoComponent,
    DietPlanComponent,
    CheatMealsComponent,
    RecipesComponent,
    SelectMealsComponent,
    ShoppingListComponent,
    FoodsComponent,
    RestaurantsComponent,
    ChatComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatRippleModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatGridListModule,
    MatListModule,
    MatToolbarModule,
    MatInputModule,
  ]
})
export class DashboardModule { }
