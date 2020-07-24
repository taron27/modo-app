export interface Weeks {
  weekName: string;
  meals: Meals[];
}

interface Meals {
  name: string;
  price: number;
  isSelect: boolean;
}
