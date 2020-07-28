import { Component, OnInit } from '@angular/core';
import { DietInfo } from './shared/diet-info.model';
import { DietInfosService } from './shared/diet-info.service';
import { MatDialog } from '@angular/material/dialog';
import { InfoPopUpComponent } from '../info-pop-up/info-pop-up.component';

@Component({
  selector: 'app-diet-info',
  templateUrl: './diet-info.component.html',
  styleUrls: ['./diet-info.component.scss']
})
export class DietInfoComponent implements OnInit {

  dietInfos: DietInfo[] = [];

  constructor(private dietInfosService: DietInfosService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.dietInfosService.getDietInfos().then((data) => {
      this.dietInfos = data;
    });
  }

  openInfoPopUp(info): void {
    this.dialog.open(InfoPopUpComponent, {
      width: '375px',
      position: {bottom: '0'},
      data: { description: info.infoDescription, title: info.title }
    });
  }
}
