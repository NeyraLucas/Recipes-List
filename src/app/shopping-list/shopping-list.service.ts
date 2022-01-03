import { Subject } from "rxjs";
import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListService{
    //matriz para agregar elementos
    ingredientsChange = new Subject<Ingredient[]>(); 
    startedEditing = new Subject<number>();
    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10),
    ];

    getIngredients(){
        return this.ingredients.slice();
    }

    getIngredient(i: number){
        return this.ingredients[i];
    }

    addIngredient(ingredient: Ingredient){
        this.ingredients.push(ingredient);
        //pasamos la nueva matriz
        this.ingredientsChange.next(this.ingredients.slice());
    }

    addIngredients(ingredients: Ingredient[]){
        /* for(let ingredient of ingredients){
            this.addIngredient(ingredient);
        } */
        this.ingredients.push(...ingredients);
        this.ingredientsChange.next(this.ingredients.slice());
    }

    updateIngredient(i: number, newIngrediente: Ingredient){
        this.ingredients[i] = newIngrediente;
        this.ingredientsChange.next(this.ingredients.slice());
    }

    //eliminar
    deleteIngredient(i: number){
        this.ingredients.splice(i, 1);
        this.ingredientsChange.next(this.ingredients.slice());
    }
}