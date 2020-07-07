import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  title = 'Modo App';
  sidenavLinks = [
    { name: 'My Profile', path: '/user-info' },
    { name: 'Diet info', path: '/diet-info' },
    { name: 'Diet Plan', path: '/diet-plan' },
    { name: 'Overview', path: '/' },
    { name: 'Shopping', path: '/shopping' },
    { name: 'Foods', path: '/foods' },
    { name: 'Restaurants', path: '/restaurants' },
    { name: 'Chat', path: '/chat' },
    { name: 'Subscription', path: '/subscription' },
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

}
