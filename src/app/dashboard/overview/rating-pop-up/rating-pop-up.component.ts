import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import RatingData from './shared/rating-data.model';

@Component({
  selector: 'app-rating-pop-up',
  templateUrl: './rating-pop-up.component.html',
  styleUrls: ['./rating-pop-up.component.scss']
})
export class RatingPopUpComponent implements OnInit {

  date = new Date();

  constructor(@Inject(MAT_DIALOG_DATA) public data: RatingData) {
  }

  ngOnInit(): void {
  }

  closeDialog(): void {
    this.data.date = new Date();
  }
}
