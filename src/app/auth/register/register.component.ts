import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Validator } from '../../validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  matcher = new Validator();
  message: string;

  constructor(public authService: AuthService, public router: Router) {
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

  register(): void {
    this.message = 'Trying to register ...';

    this.authService.login().subscribe(() => {
      this.setMessage();
      if (this.authService.isLoggedIn) {
        const redirectUrl = '/user-info';

        // Redirect the user
        this.router.navigate([redirectUrl]);
      }
    });
  }
}
