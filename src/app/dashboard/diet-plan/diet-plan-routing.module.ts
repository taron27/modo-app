import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SelectMealsComponent } from './select-meals/select-meals.component';
import { DietPlanComponent } from './diet-plan.component';
import { CheckoutComponent } from './checkout/checkout.component';

const routes: Routes = [
  {
    path: '',
    component: DietPlanComponent,
  },
  {
    path: 'select-meals',
    component: SelectMealsComponent,
  },
  {
    path: 'checkout',
    component: CheckoutComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DietPlanRoutingModule { }
