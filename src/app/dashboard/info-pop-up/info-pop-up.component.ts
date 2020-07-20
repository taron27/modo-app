import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PopUpData } from './shared/pop-up-data.model';

@Component({
  selector: 'app-info-pop-up',
  templateUrl: './info-pop-up.component.html',
  styleUrls: ['./info-pop-up.component.scss']
})
export class InfoPopUpComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<InfoPopUpComponent>,
    @Inject(MAT_DIALOG_DATA) public data: PopUpData
  ) { }

  ngOnInit(): void {
  }

}
