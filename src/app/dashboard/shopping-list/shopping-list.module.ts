import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingListRoutingModule } from './shopping-list-routing.module';
import { ShoppingListComponent } from './shopping-list.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    ShoppingListComponent,
  ],
  imports: [
    CommonModule,
    ShoppingListRoutingModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class ShoppingListModule { }
