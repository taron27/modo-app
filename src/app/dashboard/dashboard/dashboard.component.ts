import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/auth.service';
import { SideNav } from './shared/side-nav.model';
import { DashboardService } from './shared/dashboard.service';
import { MatDialog } from '@angular/material/dialog';
import { InfoPopUpComponent } from '../info-pop-up/info-pop-up.component';
import { SharePopUpComponent } from '../share-pop-up/share-pop-up.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  title = 'user info';
  currentInfoDescription = 'user info';
  isTransparentHeader = false;
  isFixedHeader = false;
  isMobileFixedHeader = false;
  showTrialPopUp = false;
  isIpadContent = true;
  showSomeWindowPopUp = false;
  isShowInfoIcon = false;
  isShowShareIcon = false;
  sidenavLinks: SideNav[] = [];

  constructor(
    private authService: AuthService,
    private router: Router,
    private dashboardService: DashboardService,
    private dialog: MatDialog,
  ) {
    dashboardService.getSideNav().then((data) => {
      this.sidenavLinks = data;
    });
  }

  ngOnInit(): void {
  }

  openInfoPopUp(): void {
    this.dialog.open(InfoPopUpComponent, {
      width: '375px',
      panelClass: 'fullscreen-modal',
      data: { description: this.currentInfoDescription, title: this.title }
    });
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/']);
  }

  changePage(sidenavLink): void {
    const {
      title, path, isShowInfoIcon,
      infoPopUpDescription
    } = sidenavLink;
    this.router.navigate([path])
      .then(() => {
        this.isShowInfoIcon = isShowInfoIcon;
        this.title = title;
        this.currentInfoDescription = infoPopUpDescription;
      });
  }

  openSharePopUp(): void {
    this.dialog.open(SharePopUpComponent, {
      width: '400px',
      panelClass: 'fullscreen-modal',
      data: { description: this.currentInfoDescription, title: this.title }
    });
  }
}
