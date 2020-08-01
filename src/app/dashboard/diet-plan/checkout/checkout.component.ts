import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Validator } from '../../../validator';
import { Router } from '@angular/router';
import { DietPlanService } from '../shared/diet-plan.service';
import { Payment } from '../shared/payment.model';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  checkoutForm: FormGroup;
  matcher = new Validator();
  paymentMethods: Payment[] = [];
  currentPayment: Payment;

  constructor(public router: Router, public dietPlanService: DietPlanService) {
    this.checkoutForm = new FormGroup({
      time: new FormControl('', [
        Validators.required,
      ]),
      country: new FormControl('', [
        Validators.required,
      ]),
      city: new FormControl('', [
        Validators.required,
      ]),
      promoCode: new FormControl('', [
        Validators.required,
      ]),
      postCode: new FormControl('', [
        Validators.required,
      ]),
      address1: new FormControl('', [
        Validators.required,
      ]),
      paymentMethod: new FormControl('', [
        Validators.required,
      ]),
    });
  }

  ngOnInit(): void {
    this.dietPlanService.getPaymentMethods().then(data => {
      this.paymentMethods = data;
    });
  }

  choosePaymentMethod(currentPayment): void {
    this.currentPayment = currentPayment;
  }
}
