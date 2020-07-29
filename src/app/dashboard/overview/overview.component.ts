import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { Subject } from 'rxjs';
import { RatingPopUpComponent } from './rating-pop-up/rating-pop-up.component';
import { MatDialog } from '@angular/material/dialog';
import RatingData from './rating-pop-up/shared/rating-data.model';
import { OverviewService } from './rating-pop-up/shared/overview.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

  color: ThemePalette = 'primary';
  mode: ProgressSpinnerMode = 'determinate';
  value = 75;
  currentDate = Date.now();
  prevDate: number;
  todayData = {
    rightFood: false,
    rightAmount: false,
    date: new Date()
  };
  rightDietData: RatingData[] = [];
  prevData: object;
  prevMonthName: string;
  currentMonthName: string;
  refresh: Subject<any> = new Subject();

  constructor(public dialog: MatDialog, public overviewService: OverviewService) {
    const currentDate = new Date();
    this.prevDate = currentDate.setMonth(currentDate.getMonth() - 1);
    this.prevMonthName = currentDate.toLocaleString('default', { month: 'long' });
    this.currentMonthName = new Date().toLocaleString('default', { month: 'long' });
    overviewService.getRatingData().then((data) => {
      this.rightDietData = data;
    });
  }

  ngOnInit(): void {
  }

  openRatingPopUp(): void {
    const dialogRef = this.dialog.open(RatingPopUpComponent, {
      width: '375px',
      position: {bottom: '0'},
      panelClass: 'fullscreen-modal',
      data: this.todayData
    });

    dialogRef.afterClosed().subscribe(result => {

      if (result) {
        let index = null;
        this.todayData = result;
        this.rightDietData.find((item, key) => {
          if (item.date.toString().slice(0, 15) === result.date.toString().slice(0, 15)) {
            index = key;
          }
        });

        if (index !== null) {
          this.rightDietData[index] = result;
        } else {
          this.rightDietData.push(result);
        }

        setTimeout(() => {
          this.refresh.next();
        }, 100);
      }
    });
  }

}
