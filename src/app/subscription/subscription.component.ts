import { Component, OnInit } from '@angular/core';

export interface Plan {
  id: number;
  name: string;
  active: boolean;
}

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.scss']
})
export class SubscriptionComponent implements OnInit {

  plans: Plan[] = [
    {id: 1, name: '1 Month', active: true},
    {id: 2, name: '3 Months', active: false},
    {id: 3, name: '1 Year', active: false},
  ];

  constructor() { }

  ngOnInit(): void {
  }

  private changeActivePlan = (id: number) => {
    this.plans.forEach((plan, index) => {
      this.plans[index].active = false;
    });

    const chosenPlanIndex = this.plans.findIndex(plan => plan.id === id);
    this.plans[chosenPlanIndex].active = true;
  }

}
