import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestaurantsRoutingModule } from './restaurants-routing.module';
import { RestaurantsComponent } from './restaurants.component';
import { AgmCoreModule } from '@agm/core';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    RestaurantsComponent
  ],
  imports: [
    CommonModule,
    RestaurantsRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAZxM9ft3gZ7ZjqjibwHblMbRG8ZY-Boag'
    }),
    MatIconModule,
  ]
})
export class RestaurantsModule { }
