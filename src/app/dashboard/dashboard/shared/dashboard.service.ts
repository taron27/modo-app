import { Injectable } from '@angular/core';
import { SIDENAV } from './mock-side-nav';
import { SideNav } from './side-nav.model';

@Injectable({
  providedIn: 'root'
})

export class DashboardService {
  getSideNav(): Promise<SideNav[]> {
    return Promise.resolve<SideNav[]>(SIDENAV);
  }
}
