import { RecipeService } from "../recipe.service";
import { Component, OnInit } from "@angular/core";
import { Recipe } from "../recipe.model";
import { Router, ActivatedRoute, Params } from "@angular/router";

@Component({
  selector: "app-recipe-details",
  templateUrl: "./recipe-details.component.html",
  styleUrls: ["./recipe-details.component.css"],
})
export class RecipeDetailsComponent implements OnInit {
  recipe: Recipe;
  id: number;

  constructor(
    private recipeService: RecipeService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params["id"];
      this.recipe = this.recipeService.getRecipeNum(this.id);
    });
  }

  onAddToShoppingList() {
    this.recipeService.addIngredientstoShoppingList(this.recipe.ingredient);
  }

  onEditRecipe() {
    this.router.navigate(["edit"], { relativeTo: this.route });
  }
}
