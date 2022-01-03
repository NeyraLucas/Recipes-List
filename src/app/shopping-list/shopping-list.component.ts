import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[];
  private igChangeSub: Subscription;

  constructor(private slService: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.slService.getIngredients();
    //add new item
    this.igChangeSub = this.slService.ingredientsChange
      .subscribe(
        (ingredients: Ingredient[]) =>{
          this.ingredients = ingredients;
        }
      )
  }

  onEditItem(i: number){
    this.slService.startedEditing.next(i);
  }

  ngOnDestroy(): void {
      this.igChangeSub.unsubscribe();
  }

}
