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
  sidenavLinks = [
    { name: 'My Profile', path: '/user-info', title: 'user info' },
    { name: 'Diet info', path: '/diet-info', title: 'diet info' },
    { name: 'Diet Plan', path: '/diet-plan', title: 'diet plan' },
    { name: 'Overview', path: '/', title: 'overview' },
    { name: 'Shopping', path: '/shopping', title: 'shopping' },
    { name: 'Foods', path: '/foods', title: 'food' },
    { name: 'Restaurants', path: '/restaurants', title: 'restaurants' },
    { name: 'Chat', path: '/chat', title: 'chat' },
    { name: 'Subscription', path: '/subscription', title: 'Subscribe' },
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

  changePage(title, path): void {
    this.router.navigate([path])
      .then(() => {
        this.title = title;
      });
  }
}
