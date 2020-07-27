import { Component, OnInit } from '@angular/core';
import { ShoppingListService } from './shared/shopping-list.service';
import { ShoppingList } from './shared/shopping-list.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {

  list: ShoppingList[] = [];
  selected: ShoppingList[] = [];

  constructor(public shoppingListService: ShoppingListService) {
    shoppingListService.getShoppingList().then(data => {
      this.list = data;
    });
  }

  ngOnInit(): void {
  }

  addFood(ingredient): void {
    if (ingredient.isSelected) {
      const index = this.selected.findIndex(item => item.name === ingredient.name);

      this.selected.splice(index, 1);
    } else {
      this.selected.push(ingredient);
    }
    ingredient.isSelected = !ingredient.isSelected;
  }
}
