import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Validator } from '../../validator';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { Observable } from 'rxjs';

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
  ];
  currentGender = this.gender[0].value;
  systems = [
    {name: 'Metric', value: 'Metric'},
    {name: 'Imperial', value: 'Imperial'},
  ];
  currentSystem = this.systems[0].value;
  heightType = ['cm', 'feet'];
  selectedHeightType = this.heightType[0];
  weightType = ['kg', 'lbs'];
  selectedWightType = this.weightType[0];
  createdAddresses: Observable<any[]>;

  constructor(public dashboardComponent: DashboardComponent) {
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
      system: new FormControl(this.systems[0].value, [
        Validators.required,
      ]),
      height: new FormControl('175', [
        Validators.required,
      ]),
      selectedHeightType: new FormControl(this.selectedHeightType, []),
      selectedWightType: new FormControl(this.selectedWightType, []),
      weight: new FormControl('55', [
        Validators.required,
      ]),
    });
    this.changeDashboardSettings();
  }

  ngOnInit(): void {
  }

  changeDashboardSettings(): void {
    this.dashboardComponent.isIpadContent = true;
    this.dashboardComponent.isFixedHeader = false;
    this.dashboardComponent.isMobileFixedHeader = false;
    this.dashboardComponent.isTransparentHeader = false;
    this.dashboardComponent.title = 'User Info';
    this.dashboardComponent.currentInfoDescription = 'User Info';
    this.dashboardComponent.isShowInfoIcon = false;
    this.dashboardComponent.isShowShareIcon = false;
  }
}
