export interface ShoppingList {
  name: string;
  ingredients: Ingredients[];
}

export interface Ingredients {
  name: string;
  isSelected: boolean;
  isDeleted: boolean;
}

export interface ExtraAttributes {
  name: string;
}
