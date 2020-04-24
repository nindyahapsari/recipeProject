import { RecipeService } from "./../recipes/recipe.service";
import { Recipe } from "../recipes/recipe.model";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({ providedIn: "root" })
export class DataStorageService {
  urlDB = "https://ng-course-recipe-book-ffbb3.firebaseio.com/recipes.json";

  constructor(private http: HttpClient, private recipeService: RecipeService) {}

  storeRecipes() {
    const recipes = this.recipeService.getRecipe();
    console.log(recipes);
    return this.http.put(this.urlDB, recipes).subscribe((response) => {
      console.log(response);
    });
  }

  fetchRecipes() {
    this.http.get<Recipe[]>(this.urlDB).subscribe((responseRecipe) => {
      this.recipeService.setRecipes(responseRecipe);
      console.log(responseRecipe); //check if the data was fetch
    });
  }
}
