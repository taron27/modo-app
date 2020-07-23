import { Injectable } from '@angular/core';
import { RATINGDATA } from './mock-rating-data';
import RatingData from './rating-data.model';

@Injectable({
  providedIn: 'root'
})

export class OverviewService {
  getRatingData(): Promise<RatingData[]> {
    return Promise.resolve<RatingData[]>(RATINGDATA);
  }
}
