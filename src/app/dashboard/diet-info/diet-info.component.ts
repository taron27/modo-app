import { Component, OnInit } from '@angular/core';
import { DietInfo } from './shared/diet-info.model';
import { DietInfosService } from './shared/diet-info.service';

@Component({
  selector: 'app-diet-info',
  templateUrl: './diet-info.component.html',
  styleUrls: ['./diet-info.component.scss']
})
export class DietInfoComponent implements OnInit {

  dietInfos: DietInfo[] = [];

  constructor(private dietInfosService: DietInfosService) {}

  ngOnInit(): void {
    this.dietInfosService.getDietInfos().then((data) => {
      this.dietInfos = data;
    });
  }

}
