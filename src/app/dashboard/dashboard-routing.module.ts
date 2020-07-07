import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../auth/auth.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SubscriptionComponent } from './subscription/subscription.component';
import { DietInfoComponent } from './diet-info/diet-info.component';
import { DietPlanComponent } from './diet-plan/diet-plan.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { FoodsComponent } from './foods/foods.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { ChatComponent } from './chat/chat.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        children: [
          { path: 'user-info', component: UserInfoComponent },
          { path: 'diet-info', component: DietInfoComponent },
          { path: 'diet-plan', component: DietPlanComponent },
          { path: 'shopping', component: ShoppingListComponent },
          { path: 'foods', component: FoodsComponent },
          { path: 'restaurants', component: RestaurantsComponent },
          { path: 'chat', component: ChatComponent },
          { path: 'subscription', component: SubscriptionComponent },
        ],
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
