export interface Recipe {
  recipe: Recipes[];
  image: string;
  suggestion: string;
}

interface Recipes {
  description: string;
}
