import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Validator } from '../../validator';
import { ProfileService } from '../../dashboard/diet-info/shared/profile.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  matcher = new Validator();
  message: string;
  payload = {
    email: '',
    password: '',
  };
  error = {
    show: false,
    message: ''
  };

  constructor(public authService: AuthService, public router: Router, public profileService: ProfileService) {
    this.setMessage();
  }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.email,
      ]),
      password: new FormControl('', [
        Validators.required,
      ]),
    });
  }

  setMessage(): void {
    this.message = 'Logged ' + (this.authService.isLoggedIn ? 'in' : 'out');
  }

  async login(): Promise<void> {

    if (this.loginForm.status !== 'VALID') {
      return;
    }

    const { email, password } = this.payload;
    const user = {
      email: email.toLowerCase(),
      password
    };

    try {
      const res = await this.authService.login(user);
      await this.profileService.setupProfile(user.email);

      if (res.user) {
        const redirectUrl = '/user-info';
        this.router.navigate([redirectUrl]);
      } else {
        this.error.message = 'Incorrect login or password';
        this.error.show = true;
      }
    } catch (err) {
      this.error.message = err.message;
      this.error.show = true;
    }
  }

}
