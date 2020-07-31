import { Component, Inject, OnInit } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import RatingData from './shared/rating-data.model';

@Component({
  selector: 'app-rating-pop-up',
  templateUrl: './rating-pop-up.component.html',
  styleUrls: ['./rating-pop-up.component.scss']
})
export class RatingPopUpComponent implements OnInit {

  date = new Date();
  errorMessage = false;

  constructor(public dialogRef: MatDialogRef<RatingPopUpComponent>,
              @Inject(MAT_DIALOG_DATA) public data: RatingData) {
  }

  ngOnInit(): void {
    console.log(this.data);
  }

  closeDialog(): void {
    if (this.data.rightAmount === undefined || this.data.rightFood === undefined) {
      this.errorMessage = true;
    } else {
      this.data.date = new Date();
      this.dialogRef.close(this.data);
    }
  }
}
