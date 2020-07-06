import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Modo App';
  sidenavLinks = [
    { name: 'My Profile', path: '/' },
    { name: 'Diet info', path: '/' },
    { name: 'Diet Plan', path: '/' },
    { name: 'Overview', path: '/' },
    { name: 'Shopping', path: '/' },
    { name: 'Foods', path: '/' },
    { name: 'Restaurants', path: '/' },
    { name: 'Chat', path: '/' },
    { name: 'Subscription', path: '/subscription' },
    { name: 'Sign out', path: '/' },
  ];
}
