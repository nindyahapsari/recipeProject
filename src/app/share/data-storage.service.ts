import { RecipeService } from "../recipes/recipe.service";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({ providedIn: "root" })
export class DataStorageService {
  constructor(private http: HttpClient, private recipeService: RecipeService) {}

  storeRecipe() {
    const recipe = this.recipeService.getRecipe();
    this.http
      .put(
        "https://ng-course-recipe-book-ffbb3.firebaseio.com/recipe.json",
        recipe
      )
      .subscribe((response) => {
        console.log(response);
      });
  }
}
