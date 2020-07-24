import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DietInfoRoutingModule } from './diet-info-routing.module';
import { DietInfoComponent } from './diet-info.component';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    DietInfoComponent
  ],
  imports: [
    CommonModule,
    DietInfoRoutingModule,
    MatSelectModule,
    FormsModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class DietInfoModule { }
