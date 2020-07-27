export interface ShoppingList {
  name: string;
  ingredients: Ingredients[];
}

export interface Ingredients {
  image: string;
  name: string;
  isSelected: boolean;
}
