import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Validator } from '../../validator';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  forgotPasswordForm: FormGroup;
  matcher = new Validator();
  payload = {
    email: ''
  };
  error = {
    show: false,
    message: ''
  };

  constructor(public authService: AuthService, public router: Router) {
    this.forgotPasswordForm = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.email,
      ])
    });
  }

  ngOnInit(): void {
  }

  async forgotPassword(): Promise<void> {
    try {
      await this.authService.forgotPass(this.payload.email);
      this.router.navigate(['/']);
    } catch (e) {
      this.error.show = true;
      this.error.message = e.message;
    }
  }
}
