import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { PopUpData } from './shared/pop-up-data';

@Component({
  selector: 'app-share-pop-up',
  templateUrl: './share-pop-up.component.html',
  styleUrls: ['./share-pop-up.component.scss']
})
export class SharePopUpComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<SharePopUpComponent>,
    @Inject(MAT_DIALOG_DATA) public data: PopUpData) { }

  ngOnInit(): void {
  }

}
