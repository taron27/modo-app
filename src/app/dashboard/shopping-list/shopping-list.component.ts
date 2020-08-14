import { Component, OnInit } from '@angular/core';
import { ShoppingListService } from './shared/shopping-list.service';
import { ExtraAttributes, ShoppingList } from './shared/shopping-list.model';
import { DashboardComponent } from '../dashboard/dashboard.component';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {

  list: ShoppingList[] = [];
  selected: ShoppingList[] = [];
  extraAttributes: ExtraAttributes[] = [];
  extraAttribute = {
    name: '',
    error: false
  };

  constructor(public shoppingListService: ShoppingListService, public dashboardComponent: DashboardComponent) {
    this.changeDashboardSettings();
    shoppingListService.getShoppingList().then(data => {
      this.list = data;
    });
  }

  ngOnInit(): void {
  }

  changeDashboardSettings(): void {
    this.dashboardComponent.isIpadContent = false;
    this.dashboardComponent.isFixedHeader = false;
    this.dashboardComponent.isMobileFixedHeader = true;
    this.dashboardComponent.isTransparentHeader = false;
    this.dashboardComponent.title = 'Shopping';
    this.dashboardComponent.currentInfoDescription = 'Shopping';
    this.dashboardComponent.isShowInfoIcon = false;
    this.dashboardComponent.isShowShareIcon = true;
  }

  addExtraAttribute(event): void {
    this.extraAttribute.error = false;
    if (event.key === 'Enter') {
      if (this.extraAttribute.name !== '') {
        const payload = {
          name: this.extraAttribute.name
        };

        this.extraAttributes.push(payload);
        this.extraAttribute.name = '';
      } else {
        this.extraAttribute.error = true;
      }
    }
  }

  addFood(ingredient): void {
    if (ingredient.isSelected) {
      const index = this.selected.findIndex(item => item.name === ingredient.name);

      this.selected.splice(index, 1);
    } else {
      this.selected.push(ingredient);
    }

    ingredient.isDeleted = !ingredient.isDeleted;
  }
}
