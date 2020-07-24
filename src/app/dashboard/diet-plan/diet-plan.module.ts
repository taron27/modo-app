import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DietPlanRoutingModule } from './diet-plan-routing.module';
import { DietPlanComponent } from './diet-plan.component';
import { SelectMealsComponent } from './select-meals/select-meals.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CheckoutComponent } from './checkout/checkout.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogOverviewComponent } from './dialog-overview/dialog-overview.component';

@NgModule({
  declarations: [
    DietPlanComponent,
    SelectMealsComponent,
    DialogOverviewComponent,
    CheckoutComponent,
  ],
  imports: [
    CommonModule,
    DietPlanRoutingModule,
    MatExpansionModule,
    MatIconModule,
    MatButtonModule,
    MatTabsModule,
    MatSlideToggleModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatDialogModule,
  ]
})
export class DietPlanModule { }
