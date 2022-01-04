import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, tap } from "rxjs/operators";
import { Recipe } from "../recipes/recipe.model";
import { RecipeService } from "../recipes/recipes.service";

@Injectable({providedIn: 'root'})
export class DataStorageService{

    //inyectamos en httpclient
    constructor(private http: HttpClient, private recipeService: RecipeService){
    
    }

    storeRecipes(){
        const recipes = this.recipeService.getRecipes();
        this.http.put('https://recipes-test-3a3eb-default-rtdb.firebaseio.com/recipes.json', recipes)
        .subscribe( response =>{
            console.log(response);
            
        });
    }

    fetchrecipes(){
        return this.http.get<Recipe[]>('https://recipes-test-3a3eb-default-rtdb.firebaseio.com/recipes.json')
        .pipe(map(recipes =>{
            return recipes.map( recipe =>{
                return { ...recipe, ingredients: recipe.ingredients ? recipe.ingredients : [] };
            });
        }),
        tap(recipes =>{
            this.recipeService.setRecipes(recipes);
        })
        )
    }



}