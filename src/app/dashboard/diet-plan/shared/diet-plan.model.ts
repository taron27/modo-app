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
  recipe: Recipe[];
}

interface Ingredients {
  name: string;
  isCheat: boolean;
}

interface Recipe {
  description: string;
}
