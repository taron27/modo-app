import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diet-info',
  templateUrl: './diet-info.component.html',
  styleUrls: ['./diet-info.component.scss']
})
export class DietInfoComponent implements OnInit {

  panelOpenState = false;

  dietInfos = [
    {
      title: 'Diet Types',
      name: 'weight lose',
      image: '../../../assets/public/icons/diet-info/apple.svg',
      description: 'Diet Types description'
    },
    {
      title: 'Weight goal',
      name: '52',
      image: '../../../assets/public/icons/diet-info/scales.svg',
      description: 'Weight goal description'
    },
    {
      title: 'Meals per day',
      name: '4',
      image: '../../../assets/public/icons/diet-info/hot-cup.svg',
      description: 'Meals per day description'
    },
    {
      title: 'Body type',
      name: 'Endomo',
      image: '../../../assets/public/icons/diet-info/body.svg',
      description: 'Body type description'
    },
    {
      title: 'Activity',
      name: 'Minimum',
      image: '../../../assets/public/icons/diet-info/activity.svg',
      description: 'Activity description'
    },
    {
      title: 'Food weight',
      name: '95gr',
      image: '../../../assets/public/icons/diet-info/food-weight.svg',
      description: 'Food weight description'
    },
    {
      title: 'Eating habit',
      name: 'Meat',
      image: '../../../assets/public/icons/diet-info/eating-habit.svg',
      description: 'Eating habit description'
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
