import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';
import { DialogData } from '../shared/dialog-data.model';
import { Food } from '../shared/food.model';
import { DietPlanService } from '../shared/diet-plan.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Validator} from '../../../validator';
import { InfoPopUpComponent } from '../../info-pop-up/info-pop-up.component';

@Component({
  selector: 'app-dialog-overview',
  templateUrl: './dialog-overview.component.html',
  styleUrls: ['./dialog-overview.component.scss']
})
export class DialogOverviewComponent implements OnInit {
  foods: Food[] = [];
  isCleanDiet = false;
  mealsForm: FormGroup;
  option = {
    quantity: '1',
    food: '',
  };
  finallyData = {
    name: '',
    isCheat: false,
  };
  matcher = new Validator();

  constructor(
    private dietPlanService: DietPlanService,
    public dialogRef: MatDialogRef<DialogOverviewComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private dialog: MatDialog) {
    data.quantity = '1';
  }

  ngOnInit(): void {
    this.dietPlanService.getFoods().then((data) => {
      this.foods = data;
      if (data[0]) {
        this.option.food = data[0].value;
      }
    });

    this.mealsForm = new FormGroup({
      quantity: new FormControl('', [
        Validators.required,
      ]),
      food: new FormControl('', [
        Validators.required,
      ]),
    });
  }

  changeIsCheat(isCheat): void {
    this.isCleanDiet = isCheat;
  }

  updateData(): void {
    const { quantity, food } = this.option;
    if (quantity && food) {
      this.finallyData.name = `${quantity} ${food}`;
      this.finallyData.isCheat = true;
    }
  }

  openInfoPopUp(): void {
    const payload = {
      title: 'Replace Food',
      description: 'If you have eaten the cheat meal instead of the planned meal, enable this option.' +
        'If you have eaten the Cheat Meal on top of the planned meal, do not enable.'
    };

    this.dialog.open(InfoPopUpComponent, {
      width: '375px',
      position: {bottom: '0'},
      panelClass: 'fullscreen-modal',
      data: payload
    });
  }
}
