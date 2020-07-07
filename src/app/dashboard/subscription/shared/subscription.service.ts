import { Injectable } from '@angular/core';

import { PLANS } from './mock-plans';
import {Plan} from './plan.model';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {
  getPlans(): Promise<Plan[]> {
    return Promise.resolve<Plan[]>(PLANS);
  }
}
