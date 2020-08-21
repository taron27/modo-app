import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Validator } from '../../validator';
import { ValidateService } from './validate.service';
import { ProfileService } from '../../dashboard/diet-info/shared/profile.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  matcher = new Validator();
  message: string;
  payload = {
    email: '',
    password: ''
  };

  error = {
    show: false,
    message: ''
  };

  constructor(public authService: AuthService,
              public router: Router,
              private validateService: ValidateService,
              private profileService: ProfileService) {
    this.registerForm = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.email,
      ]),
      password: new FormControl('', [
        Validators.required,
      ]),
    });

    this.setMessage();
  }

  ngOnInit(): void {
  }

  setMessage(): void {
    this.message = 'Registered ' + (this.authService.isLoggedIn ? 'in' : 'out');
  }

  async register(): Promise<void> {

    if (this.registerForm.status !== 'VALID') {
      return;
    }

    const { email, password } = this.payload;
    const user = {
      email: email.toLowerCase(),
      password
    };

    const error = {
      show: false,
      message: ''
    };

    const validationChecks = {
      isInfo: true,
      isEmail: true,
      isPassword: true
    };

    const errorMessages: Array<string> = [];

    if (!this.validateService.validateInfoNotMissing(user)) {
      validationChecks.isInfo = false;
      errorMessages.push('Some fields are missing. Please fill them out before submitting. ');
      this.error.show = true;
      this.error.message = 'Some fields are missing. Please fill them out before submitting. ';
      return;
    }

    if (!this.validateService.validateEmail(user.email)) {
      validationChecks.isEmail = false;
      errorMessages.push('The email is either incorrect or it is already taken. ');
      this.error.show = true;
      this.error.message = 'The email is either incorrect or it is already taken. ';
      return;
    }

    if (!this.validateService.validatePassword(user.password)) {
      validationChecks.isPassword = false;
      errorMessages.push('The password must be at least 5 characters long and contain numbers, capital and lower case letters.');
      this.error.show = true;
      this.error.message = 'The password must be at least 5 characters long and contain numbers, capital and lower case letters.';
      return;
    }

    if (validationChecks.isInfo && validationChecks.isEmail && validationChecks.isPassword) {
      try {
        const res = await this.authService.register(user);
        if (res.user) {
          this.authService.sendEmailVerification();

          try {
            await this.profileService.createProfile(res.user.email, {email: res.user.email});
          } catch (e) {
            this.error.message = e.message;
            this.error.show = true;
          }
        } else {
          this.error.message = 'Email is already exists';
          this.error.show = true;
        }
      } catch (e) {
        this.error.message = e.message;
        this.error.show = true;
      }
    } else {
      this.formAndPresentErrorMessages(errorMessages);
    }
  }

  public formAndPresentErrorMessages(errorMessages: Array<string>): void {
    const errorMessage = errorMessages.reduce((acc, currVal) => {
      return acc.concat('<p>' + currVal + '</p>');
    }, '');

  }
}
