import { Injectable } from '@angular/core';
import { DIETINFOS } from './mock-diet-info';
import { DietInfo } from './diet-info.model';

@Injectable({
  providedIn: 'root'
})

export class DietInfosService {
  getDietInfos(): Promise<DietInfo[]> {
    return Promise.resolve<DietInfo[]>(DIETINFOS);
  }
}
