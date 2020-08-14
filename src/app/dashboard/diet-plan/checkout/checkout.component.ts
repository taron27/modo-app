import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Validator } from '../../../validator';
import { Router } from '@angular/router';
import { DietPlanService } from '../shared/diet-plan.service';
import { Payment } from '../shared/payment.model';
import { DashboardComponent } from '../../dashboard/dashboard.component';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent implements OnInit {

  constructor(public router: Router, public dietPlanService: DietPlanService, public dashboardComponent: DashboardComponent) {
    this.checkoutForm = new FormGroup({
      country: new FormControl('', [
        Validators.required,
      ]),
      flat: new FormControl('', [
        Validators.required,
      ]),
      orderComments: new FormControl('', [
        Validators.required,
      ]),
      phone: new FormControl('', [
        Validators.required,
      ]),
      address: new FormControl('', [
        Validators.required,
      ]),
      paymentMethod: new FormControl('', [
        Validators.required,
      ]),
      floor: new FormControl('', [
        Validators.required,
      ]),
    });
    this.changeDashboardSettings();
  }

  checkoutForm: FormGroup;
  matcher = new Validator();
  paymentMethods: Payment[] = [];
  currentPayment: Payment;

  ngOnInit(): void {
    this.dietPlanService.getPaymentMethods().then(data => {
      this.paymentMethods = data;
    });
  }

  changeDashboardSettings(): void {
    this.dashboardComponent.isIpadContent = true;
    this.dashboardComponent.isFixedHeader = false;
    this.dashboardComponent.isMobileFixedHeader = false;
    this.dashboardComponent.isTransparentHeader = false;
    this.dashboardComponent.title = 'Checkout';
    this.dashboardComponent.currentInfoDescription = 'Checkout';
    this.dashboardComponent.isShowInfoIcon = false;
    this.dashboardComponent.isShowShareIcon = false;
  }

  choosePaymentMethod(currentPayment): void {
    this.currentPayment = currentPayment;
  }
}
