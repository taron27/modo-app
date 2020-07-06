import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SubscriptionComponent } from './subscription/subscription.component';

const routes: Routes = [
  {
    path: 'subscription',
    component: SubscriptionComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [SubscriptionComponent];
