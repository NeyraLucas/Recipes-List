import { Component, OnInit } from '@angular/core';
import { RecipeService } from './recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
 // selectedRecipe: Recipe;
  constructor() { }
  //constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    /* this.recipeService.recipeSelected
      .subscribe(
        (recipe: Recipe) =>{
          this.selectedRecipe = recipe;
        }
      ) */
  }

}
