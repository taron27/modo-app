import { Injectable } from '@angular/core';
import { FOODS } from './mock-foods';
import { Food } from './food.model';
import { DietPlans, SocialAccounts } from './diet-plan.model';
import { DIETPLANS, SOCIALACCOUNT } from './mock-diet-plan';
import { Payment } from './payment.model';
import { PAYMENT } from './mock-payment';

@Injectable({
  providedIn: 'root'
})

export class DietPlanService {
  getFoods(): Promise<Food[]> {
    return Promise.resolve<Food[]>(FOODS);
  }

  getDietPlans(): Promise<DietPlans[]> {
    return Promise.resolve<DietPlans[]>(DIETPLANS);
  }

  getPaymentMethods(): Promise<Payment[]> {
    return Promise.resolve<Payment[]>(PAYMENT);
  }

  getSocialAccounts(): Promise<SocialAccounts[]> {
    return Promise.resolve<SocialAccounts[]>(SOCIALACCOUNT);
  }
}
