import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubscriptionRoutingModule } from './subscription-routing.module';
import { SubscriptionComponent } from './subscription.component';
import { MatRippleModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    SubscriptionComponent
  ],
  imports: [
    CommonModule,
    SubscriptionRoutingModule,
    MatRippleModule,
    MatButtonModule
  ]
})
export class SubscriptionModule { }
