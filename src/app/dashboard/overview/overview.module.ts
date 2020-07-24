import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverviewRoutingModule } from './overview-routing.module';
import { OverviewComponent } from './overview.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { RatingPopUpComponent } from './rating-pop-up/rating-pop-up.component';
import { CalendarMonthViewComponent } from '../calendar-month-view/calendar-month-view.component';
import {CalendarCommonModule, CalendarModule, CalendarMonthModule, DateAdapter} from 'angular-calendar';
import {adapterFactory} from 'angular-calendar/date-adapters/date-fns';

@NgModule({
  declarations: [
    OverviewComponent,
    RatingPopUpComponent,
    CalendarMonthViewComponent
  ],
  exports: [
    CalendarMonthViewComponent
  ],
  imports: [
    CommonModule,
    OverviewRoutingModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatDialogModule,
    CalendarMonthModule,
    CalendarCommonModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
  ]
})
export class OverviewModule { }
