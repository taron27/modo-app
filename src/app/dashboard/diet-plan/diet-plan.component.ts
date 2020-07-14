import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diet-plan',
  templateUrl: './diet-plan.component.html',
  styleUrls: ['./diet-plan.component.scss']
})
export class DietPlanComponent implements OnInit {

  panelOpenState = false;

  weekDays = [
    {name: 'Mo', active: true},
    {name: 'Tu', active: false},
    {name: 'We', active: false},
    {name: 'Th', active: false},
    {name: 'Fr', active: false},
    {name: 'Sa', active: false},
    {name: 'Su', active: false},
  ];

  dietPlans = [
    {
      title: 'Breakfast',
      active: true,
      isDone: false,
      isMissed: false,
      image: 'background-image: url(\'../../../assets/public/images/breakfast.png\')',
      ingredients: [
        {name: '1 Slice Whole Wheat Bread'},
        {name: '1 Egg'},
        {name: 'Half Avocado (smashed)'},
      ]
    },
    {
      title: 'Lunch',
      active: false,
      isDone: false,
      isMissed: false,
      image: 'background-image: url(\'../../../assets/public/images/breakfast.png\')',
      ingredients: [
        {name: '1 Slice Whole Wheat Bread'},
        {name: '1 Egg'},
        {name: 'Half Avocado (smashed)'},
      ]
    },
    {
      title: 'Dinner',
      active: false,
      isDone: false,
      isMissed: false,
      image: 'background-image: url(\'../../../assets/public/images/breakfast.png\')',
      ingredients: [
        {name: '1 Slice Whole Wheat Bread'},
        {name: '1 Egg'},
        {name: 'Half Avocado (smashed)'},
      ]
    },
    {
      title: 'Dinner',
      active: false,
      isDone: false,
      isMissed: false,
      image: 'background-image: url(\'../../../assets/public/images/breakfast.png\')',
      ingredients: [
        {name: '1 Slice Whole Wheat Bread'},
        {name: '1 Egg'},
        {name: 'Half Avocado (smashed)'},
      ]
    },
    {
      title: 'Dinner',
      active: false,
      isDone: false,
      isMissed: false,
      image: 'background-image: url(\'../../../assets/public/images/breakfast.png\')',
      ingredients: [
        {name: '1 Slice Whole Wheat Bread'},
        {name: '1 Egg'},
        {name: 'Half Avocado (smashed)'},
      ]
    },
    {
      title: 'Dinner',
      active: false,
      isDone: false,
      isMissed: false,
      image: 'background-image: url(\'../../../assets/public/images/breakfast.png\')',
      ingredients: [
        {name: '1 Slice Whole Wheat Bread'},
        {name: '1 Egg'},
        {name: 'Half Avocado (smashed)'},
      ]
    },
    {
      title: 'Dinner',
      active: false,
      isDone: false,
      isMissed: false,
      image: 'background-image: url(\'../../../assets/public/images/breakfast.png\')',
      ingredients: [
        {name: '1 Slice Whole Wheat Bread'},
        {name: '1 Egg'},
        {name: 'Half Avocado (smashed)'},
      ]
    },
  ];

  doneDiets = [];

  constructor() {
    this.dietPlans.map((item, key) => {
      if (item.isDone || item.isMissed) {
        this.doneDiets.push(item);
        this.dietPlans.splice(key, 1);
      }
    });
  }

  ngOnInit(): void {
  }

  changeCurrentWeekDay(weekDay): void {
    const currentWeekDay = this.weekDays.find((item) => (item.active === true));
    if (currentWeekDay) {
      currentWeekDay.active = false;
    }
    weekDay.active = true;
  }

  dietIsDone(dietPlan, index): void {
    if (dietPlan.active) {
      dietPlan.isDone = true;
      this.changeDietStatus(dietPlan, index);
    }
  }

  dietIsMissed(dietPlan, index): void {
    if (dietPlan.active) {
      dietPlan.isMissed = true;
      this.changeDietStatus(dietPlan, index);
    }
  }


  changeDietStatus(dietPlan, index): void {
    this.doneDiets.push(dietPlan);
    if (this.dietPlans[index + 1]) {
      this.dietPlans[index + 1].active = true;
    }
    this.dietPlans.splice(index, 1);
  }
}
