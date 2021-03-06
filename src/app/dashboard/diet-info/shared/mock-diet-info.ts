import { DietInfo } from './diet-info.model';

export const DIETINFOS: DietInfo[] = [
  {
    title: 'Diet Types',
    name: 'weight lose',
    image: '../../../assets/public/icons/diet-info/apple.svg',
    infoDescription: 'Diet Types infoDescription',
    isShowInfo: false,
    options: [
      {name: 'Weight Lose', value: 'Weight Lose'},
      {name: 'Weight Gain', value: 'Weight Gain'},
      {name: 'Maintain Weight', value: 'Maintain Weight'},
    ]
  },
  {
    title: 'Weight goal',
    name: '52',
    image: '../../../assets/public/icons/diet-info/scales.svg',
    infoDescription: 'Weight goal infoDescription',
    isShowInfo: false,
    options: [
      {name: '0kg (0 lbs)', value: '0kg (0 lbs)'},
      {name: '0.25kg (0.55 lbs)', value: '0.25kg (0.55 lbs)'},
      {name: '1kg (2.2 lbs)', value: '1kg (2.2 lbs)'},
    ]
  },
  {
    title: 'Meals per day',
    name: '4',
    image: '../../../assets/public/icons/diet-info/hot-cup.svg',
    infoDescription: 'Meals per day infoDescription',
    isShowInfo: false,
    options: [
      {name: '3', value: '3'},
      {name: '4', value: '4'},
      {name: '5', value: '5'},
      {name: '6', value: '6'},
    ]
  },
  {
    title: 'Body type',
    name: 'Endomo',
    image: '../../../assets/public/icons/diet-info/body.svg',
    infoDescription: 'Body type infoDescription',
    isShowInfo: true,
    options: [
      {name: 'Ectomorph', value: 'Ectomorph'},
      {name: 'Mesomorph', value: 'Mesomorph'},
      {name: 'Endomorph', value: 'Endomorph'},
    ]
  },
  {
    title: 'Activity',
    name: 'Minimum',
    image: '../../../assets/public/icons/diet-info/activity.svg',
    infoDescription: 'Activity infoDescription',
    isShowInfo: true,
    options: [
      {name: 'Sedentary', value: 'Sedentary'},
      {name: 'Lightly Active', value: 'Lightly Active'},
      {name: 'Moderately Active', value: 'Moderately Active'},
      {name: 'Very Active', value: 'Very Active'},
      {name: 'Extra Active', value: 'Extra Active'},
    ]
  },
  {
    title: 'Food weight',
    name: '95gr',
    image: '../../../assets/public/icons/diet-info/food-weight.svg',
    infoDescription: 'Food weight infoDescription',
    isShowInfo: true,
    options: [
      {name: 'Low', value: 'Low'},
      {name: 'Moderate', value: 'Moderate'},
      {name: 'High', value: 'High'},
    ]
  },
  {
    title: 'Eating habit',
    name: 'Meat',
    image: '../../../assets/public/icons/diet-info/eating-habit.svg',
    infoDescription: 'Eating habit infoDescription',
    isShowInfo: false,
    options: [
      {name: 'Meat eater', value: 'Meat eater'},
      {name: 'Pescatarian', value: 'Pescatarian'},
      {name: 'Vegetarian', value: 'Vegetarian'},
      {name: 'Vegan', value: 'Vegan'},
    ]
  },
  {
    title: 'Cuisine Preference',
    name: '4',
    image: '../../../assets/public/icons/diet-info/hot-cup.svg',
    infoDescription: 'Meals per day infoDescription',
    isShowInfo: false,
    options: [
      {name: 'Meditteranean', value: 'Meditteranean'},
      {name: 'Middle Eastern', value: 'Middle Eastern'},
      {name: 'Indian', value: 'Indian'},
      {name: 'Chinese', value: 'Chinese'},
      {name: 'Japanese', value: 'Japanese'},
    ]
  },
];
