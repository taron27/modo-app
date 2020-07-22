import { SideNav } from './side-nav.model';

export const SIDENAV: SideNav[] = [
  {
    name: 'My Profile',
    path: '/user-info',
    title: 'user info',
    isShowInfoIcon: false,
    infoPopUpDescription: ''
  },
  {
    name: 'Diet info',
    path: '/diet-info',
    title: 'diet info',
    isShowInfoIcon: false,
    infoPopUpDescription: ''
  },
  {
    name: 'Diet Plan',
    path: '/diet-plan',
    title: 'diet plan',
    isShowInfoIcon: true,
    infoPopUpDescription: 'It is never a good idea to begin a fat loss diet with a very demanding method. That leads to a yo-yo effect where you quickly gain back all the weight that you have lost. Therefore, this method is meant to ease you in the fat loss process. There is a moderate calorie deficit and a moderate distribution of the macronutrients, where the carbs are a bit lower than average.'
  },
  {
    name: 'Overview',
    path: '/overview',
    title: 'overview',
    isShowInfoIcon: false,
    infoPopUpDescription: ''
  },
  {
    name: 'Shopping',
    path: '/shopping',
    title: 'shopping',
    isShowInfoIcon: false,
    infoPopUpDescription: ''
  },
  {
    name: 'Foods',
    path: '/foods',
    title: 'food',
    isShowInfoIcon: false,
    infoPopUpDescription: ''
  },
  {
    name: 'Restaurants',
    path: '/restaurants',
    title: 'restaurants',
    isShowInfoIcon: false,
    infoPopUpDescription: ''
  },
  {
    name: 'Chat',
    path: '/chat',
    title: 'chat',
    isShowInfoIcon: false,
    infoPopUpDescription: ''
  },
  {
    name: 'Subscription',
    path: '/subscription',
    title: 'Subscribe',
    isShowInfoIcon: false,
    infoPopUpDescription: ''
  },
];
