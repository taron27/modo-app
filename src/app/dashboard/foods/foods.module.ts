import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FoodsRoutingModule } from './foods-routing.module';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { FoodsComponent } from './foods.component';

@NgModule({
  declarations: [
    FoodsComponent
  ],
  imports: [
    CommonModule,
    FoodsRoutingModule,
    MatTabsModule,
    MatSlideToggleModule,
    FormsModule,
    MatButtonModule,
  ]
})
export class FoodsModule { }
