import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { DialogData } from '../shared/dialog-data.model';
import { Food } from '../shared/food.model';
import { DietPlanService } from '../shared/diet-plan.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Validator} from '../../../validator';

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
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {
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
}
