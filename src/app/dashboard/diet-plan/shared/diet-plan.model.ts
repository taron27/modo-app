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
  suggestion: string;
  ingredients: Ingredients[];
  recipe: Recipe[];
  socialAccounts?: SocialAccounts[];
}

interface Ingredients {
  name: string;
  isCheat: boolean;
}

interface Recipe {
  description: string;
}

export interface SocialAccounts {
  name: string;
  icon: string;
}
