import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DialogData } from '../shared/dialog-data.model';
import { Food } from '../shared/food.model';
import { DietPlanService } from '../shared/diet-plan.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Validator } from '../../../validator';
import { InfoPopUpComponent } from '../../info-pop-up/info-pop-up.component';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-dialog-overview',
  templateUrl: './dialog-overview.component.html',
  styleUrls: ['./dialog-overview.component.scss'],
  animations: [
    trigger('shrinkOutHeight', [
      state('in', style({ height: '*', opacity: 1 })),
      transition('* => void', [
        style({ height: '*', opacity: 1 }),
        animate(500, style({ height: 0, opacity: 0 }))
      ]),
      transition(':enter', [
        style({ height: 0, opacity: 0 }),
        animate(500, style({ height: '*', opacity: 1 }))
      ])
    ]),
  ]
})
export class DialogOverviewComponent implements OnInit {
  foods: Food[] = [];
  isCleanDiet = false;
  mealsForm: FormGroup;
  selectedData = [];
  option = {
    quantity: '1',
    food: '',
  };
  finallyData = {
    name: '',
    isCheat: false,
  };
  matcher = new Validator();
  error = {
    message: '',
    show: false
  };
  isCheat = false;

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
    if (isCheat) {
      this.isCleanDiet = isCheat;
    }
  }

  updateData(): void {

    if (this.selectedData.length !== 0) {
      this.dialogRef.close({finallyData: this.selectedData, isCleanDiet: this.isCleanDiet});
    } else {
      this.error.message = 'Meals not selected';
      this.error.show = true;
    }
  }

  addCheatMeals(): void {
    const { quantity, food } = this.option;

    if (quantity && food) {
      const payload = {
        name: `${quantity} ${food}`,
        isCheat: true,
      };
      this.error.show = false;

      this.selectedData.unshift(payload);
    } else {

      this.error.message = 'Fill all fields';
      this.error.show = true;
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
      panelClass: 'fullscreen-modal',
      data: payload
    });
  }
}
