import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
//import { Subject } from "rxjs";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService {
  //recipeSelected = new Subject<Recipe>();
  recipesChanged = new Subject<Recipe[]>();
  /* private recipes: Recipe[] = [
    new Recipe(
      "Enchiladas verdes",
      "La enchilada es un plato que en México se elabora con tortilla de maíz enrollada y bañada en alguna salsa picante utilizando chile en su preparación.​",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIolD7hRln93uIc3XtkkvZofFVklG3YIvj2Q&usqp=CAU",
      [new Ingredient("Mean", 15), new Ingredient("Sugar", 5)]
    ),
    new Recipe(
      "2 A Test Recipe",
      "This is simply a test 2",
      "https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg",
      [new Ingredient("Apple", 3), new Ingredient("Sugar", 1)]
    ),
  ]; */

  private recipes: Recipe[] = [];

  constructor(private slService: ShoppingListService) {}

  //mandar recipes a la bd
  setRecipes(recipes: Recipe[]){
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }

  getRecipes() {
    return this.recipes.slice();
  }

  //recibir receta por routing
  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe){
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index:number,newRecipe: Recipe){
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number){
    this.recipes.splice(index,1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
