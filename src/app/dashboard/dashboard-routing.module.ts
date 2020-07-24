import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../auth/auth.guard';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'user-info', loadChildren: () => import('./user-info/user-info.module').then(m => m.UserInfoModule) },
      { path: 'diet-info', loadChildren: () => import('./diet-info/diet-info.module').then(m => m.DietInfoModule) },
      { path: 'diet-plan', loadChildren: () => import('./diet-plan/diet-plan.module').then(m => m.DietPlanModule) },
      { path: 'shopping', loadChildren: () => import('./shopping-list/shopping-list.module').then(m => m.ShoppingListModule) },
      { path: 'foods', loadChildren: () => import('./foods/foods.module').then(m => m.FoodsModule) },
      { path: 'restaurants', loadChildren: () => import('./restaurants/restaurants.module').then(m => m.RestaurantsModule) },
      { path: 'chat', loadChildren: () => import('./chat/chat.module').then(m => m.ChatModule) },
      { path: 'subscription', loadChildren: () => import('./subscription/subscription.module').then(m => m.SubscriptionModule) },
      { path: 'overview', loadChildren: () => import('./overview/overview.module').then(m => m.OverviewModule) },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
