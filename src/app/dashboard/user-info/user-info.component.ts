import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Validator } from '../../validator';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {

  userInfoForm: FormGroup;
  matcher = new Validator();
  gender = [
    {name: 'Female', value: 'female'},
    {name: 'Male', value: 'male'},
  ]
  systems = [
    {name: 'Metric', value: 'Metric'},
    {name: 'Imperial', value: 'Imperial'},
  ]

  constructor() {
    this.userInfoForm = new FormGroup({
      email: new FormControl('sousan@mail.com', [
        Validators.required,
        Validators.email,
      ]),
      age: new FormControl('17', [
        Validators.required,
      ]),
      gender: new FormControl('', [
        Validators.required,
      ]),
      system: new FormControl('', [
        Validators.required,
      ]),
      height: new FormControl('175', [
        Validators.required,
      ]),
    });
  }

  ngOnInit(): void {
  }

}
