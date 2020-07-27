import { Injectable } from '@angular/core';
import { SHOPPINGLIST } from './mock-shopping-list';
import { ShoppingList } from './shopping-list.model';

@Injectable({
  providedIn: 'root'
})

export class ShoppingListService {
  getShoppingList(): Promise<ShoppingList[]> {
    return Promise.resolve<ShoppingList[]>(SHOPPINGLIST);
  }
}
