import { Component, OnInit } from '@angular/core';
import { Plan } from './shared/plan.model';
import { SubscriptionService } from './shared/subscription.service';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.scss']
})
export class SubscriptionComponent implements OnInit {
  plans: Plan[] = [];

  constructor(private subscriptionService: SubscriptionService) { }

  ngOnInit(): void {
    this.subscriptionService.getPlans()
      .then(plans => this.plans = plans);
  }

  private changeActivePlan = (id: number) => {
    this.plans.forEach((plan, index) => {
      this.plans[index].active = false;
    });

    const chosenPlanIndex = this.plans.findIndex(plan => plan.id === id);
    this.plans[chosenPlanIndex].active = true;
  }

}
