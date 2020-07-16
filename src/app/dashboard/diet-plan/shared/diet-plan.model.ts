export interface DietPlans {
  title: string;
  active: boolean;
  isDone: boolean;
  isMissed: boolean;
  image: string;
  ingredients: Ingredients[];
}

interface Ingredients {
  name: string;
  isCheat: boolean;
}
