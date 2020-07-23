import {CalendarEvent, ViewPeriod, WeekDay} from 'calendar-utils';

export interface MonthCustomView {
  rowOffsets: number[];
  days: MonthCustomViewDay[];
  totalDaysVisibleInWeek: number;
  period: ViewPeriod;
}

export interface MonthCustomViewDay<MetaType = any> extends WeekDay {
  inMonth: boolean;
  events: CalendarEvent[];
  backgroundColor?: string;
  badgeTotal: number;
  meta?: MetaType;
  rightFood?: boolean;
  rightAmount?: boolean;
}
