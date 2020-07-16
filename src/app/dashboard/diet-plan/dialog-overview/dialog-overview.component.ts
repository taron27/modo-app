import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { DialogData } from '../shared/dialog-data.model';
import { Food } from '../shared/food.model';
import { DietPlanService } from '../shared/diet-plan.service';

@Component({
  selector: 'app-dialog-overview',
  templateUrl: './dialog-overview.component.html',
  styleUrls: ['./dialog-overview.component.scss']
})
export class DialogOverviewComponent implements OnInit {
  foods: Food[] = [];
  options = [];
  isCleanDiet = false;

  constructor(
    private dietPlanService: DietPlanService,
    public dialogRef: MatDialogRef<DialogOverviewComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {
    data.quantity = '1';
  }

  ngOnInit(): void {
    this.dietPlanService.getFoods().then((data) => {
      this.foods = data;
    });
  }

  updateData(): void {
    const { food, quantity, isCheat } = this.data;

    if (isCheat !== undefined && isCheat) {
      this.isCleanDiet = true;
    }

    if (food && quantity) {
      const name = `${quantity} ${food}`;
      const payload = {
        name,
        isCheat: true
      };
      this.options.push(payload);
      this.data = {
        food: '',
        quantity: '1',
        isCheat: false,
      };
    }
  }
}
