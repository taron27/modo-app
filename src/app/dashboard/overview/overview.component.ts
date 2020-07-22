import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { RatingPopUpComponent } from './rating-pop-up/rating-pop-up.component';
import { MatDialog } from '@angular/material/dialog';

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

  constructor(public dialog: MatDialog) {
  }

  ngOnInit(): void {
  }


  openRatingPopUp(): void {
    const dialogRef = this.dialog.open(RatingPopUpComponent, {
      width: '370px',
      data: {rightFood: undefined, rightAmount: undefined}
    });
  }

}
