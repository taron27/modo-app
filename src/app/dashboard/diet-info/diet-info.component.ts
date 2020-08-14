import { Component, OnInit } from '@angular/core';
import { DietInfo } from './shared/diet-info.model';
import { DietInfosService } from './shared/diet-info.service';
import { MatDialog } from '@angular/material/dialog';
import { InfoPopUpComponent } from '../info-pop-up/info-pop-up.component';
import { DashboardComponent } from '../dashboard/dashboard.component';

@Component({
  selector: 'app-diet-info',
  templateUrl: './diet-info.component.html',
  styleUrls: ['./diet-info.component.scss']
})
export class DietInfoComponent implements OnInit {

  dietInfos: DietInfo[] = [];

  constructor(private dietInfosService: DietInfosService, private dialog: MatDialog, public dashboardComponent: DashboardComponent) {
    this.changeDashboardSettings();
  }

  ngOnInit(): void {
    this.dietInfosService.getDietInfos().then((data) => {
      this.dietInfos = data;
    });
  }

  changeDashboardSettings(): void {
    this.dashboardComponent.isIpadContent = true;
    this.dashboardComponent.isFixedHeader = false;
    this.dashboardComponent.isMobileFixedHeader = false;
    this.dashboardComponent.isTransparentHeader = false;
    this.dashboardComponent.title = 'Diet Info';
    this.dashboardComponent.currentInfoDescription = 'Diet Info';
    this.dashboardComponent.isShowInfoIcon = false;
    this.dashboardComponent.isShowShareIcon = false;
  }

  openInfoPopUp(info): void {
    this.dialog.open(InfoPopUpComponent, {
      width: '375px',
      panelClass: 'fullscreen-modal',
      data: { description: info.infoDescription, title: info.title }
    });
  }
}
