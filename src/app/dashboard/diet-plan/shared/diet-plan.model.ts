export interface DietPlans {
  weekName: string;
  dietPlan: Plans[];
  doneDietPlan: Plans[];
}

interface Plans {
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
  description: string;
}
