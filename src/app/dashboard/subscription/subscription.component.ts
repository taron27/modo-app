import { Component, OnInit } from '@angular/core';
import { Plan } from './shared/plan.model';
import { SubscriptionService } from './shared/subscription.service';
import {ChatService} from '../chat/shared/chat.service';
import {DashboardComponent} from '../dashboard/dashboard.component';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.scss']
})
export class SubscriptionComponent implements OnInit {
  plans: Plan[] = [];

  constructor(private subscriptionService: SubscriptionService, public dashboardComponent: DashboardComponent) {
    this.changeDashboardSettings();
  }

  ngOnInit(): void {
    this.subscriptionService.getPlans()
      .then(plans => this.plans = plans);
  }

  changeDashboardSettings(): void {
    this.dashboardComponent.isIpadContent = true;
    this.dashboardComponent.isFixedHeader = false;
    this.dashboardComponent.isMobileFixedHeader = false;
    this.dashboardComponent.isTransparentHeader = false;
    this.dashboardComponent.title = 'Shopping';
    this.dashboardComponent.currentInfoDescription = 'Shopping';
    this.dashboardComponent.isShowInfoIcon = false;
    this.dashboardComponent.isShowShareIcon = false;
  }

  private changeActivePlan = (id: number) => {
    this.plans.forEach((plan, index) => {
      this.plans[index].active = false;
    });

    const chosenPlanIndex = this.plans.findIndex(plan => plan.id === id);
    this.plans[chosenPlanIndex].active = true;
  }

}
