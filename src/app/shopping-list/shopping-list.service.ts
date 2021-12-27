import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListService{
    //matriz para agregar elementos
    ingredientsChange = new EventEmitter<Ingredient[]>(); 
    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10),
    ];

    getIngredients(){
        return this.ingredients.slice();
    }

    addIngredient(ingredient: Ingredient){
        this.ingredients.push(ingredient);
        //pasamos la nueva matriz
        this.ingredientsChange.emit(this.ingredients.slice());
    }

    addIngredients(ingredients: Ingredient[]){
        /* for(let ingredient of ingredients){
            this.addIngredient(ingredient);
        } */
        this.ingredients.push(...ingredients);
        this.ingredientsChange.emit(this.ingredients.slice());
    }
}