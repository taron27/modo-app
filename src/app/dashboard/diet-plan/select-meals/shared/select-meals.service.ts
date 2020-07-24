import { Injectable } from '@angular/core';
import { Weeks } from './weeks.model';
import { WEEKS } from './mock-weeks';

@Injectable({
  providedIn: 'root'
})

export class SelectMealsService {
  getWeeks(): Promise<Weeks[]> {
    return Promise.resolve<Weeks[]>(WEEKS);
  }
}
