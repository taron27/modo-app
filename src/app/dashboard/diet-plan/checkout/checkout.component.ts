import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Validator } from '../../../validator';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  checkoutForm: FormGroup;
  matcher = new Validator();

  constructor(public router: Router) {
    this.checkoutForm = new FormGroup({
      date: new FormControl('', [
        Validators.required,
      ]),
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
      address2: new FormControl('', [
        Validators.required,
      ]),
    });
  }

  ngOnInit(): void {
  }

}
