import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  title = 'user info';

  showTrialPopUp = false;
  showSomeWindowPopUp = false;
  isShowInfoIcon = false;

  sidenavLinks = [
    { name: 'My Profile', path: '/user-info', title: 'user info', isShowInfoIcon: false },
    { name: 'Diet info', path: '/diet-info', title: 'diet info', isShowInfoIcon: false },
    { name: 'Diet Plan', path: '/diet-plan', title: 'diet plan', isShowInfoIcon: true },
    { name: 'Overview', path: '/', title: 'overview', isShowInfoIcon: false },
    { name: 'Shopping', path: '/shopping', title: 'shopping', isShowInfoIcon: false },
    { name: 'Foods', path: '/foods', title: 'food', isShowInfoIcon: false },
    { name: 'Restaurants', path: '/restaurants', title: 'restaurants', isShowInfoIcon: false },
    { name: 'Chat', path: '/chat', title: 'chat', isShowInfoIcon: false },
    { name: 'Subscription', path: '/subscription', title: 'Subscribe', isShowInfoIcon: false },
  ];

  constructor(
    private authService: AuthService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/']);
  }

  changePage(sidenavLink): void {
    const { title, path, isShowInfoIcon } = sidenavLink
    this.router.navigate([path])
      .then(() => {
        this.isShowInfoIcon = isShowInfoIcon;
        this.title = title;
      });
  }
}
