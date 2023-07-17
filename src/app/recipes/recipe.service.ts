import { EventEmitter, Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {

  constructor(private slService: ShoppingListService) {

  }

  private recipes: Recipe[] = [
    new Recipe("Tomato Pie", "Recipe to cook Tomato Pie",
     "https://www.kingarthurbaking.com/sites/default/files/styles/featured_image/public/2022-05/Tomato-Pie_0256.jpg?itok=c63mh-z9",
     [new Ingredient('Tomato', 20),
    new Ingredient('All purpose FLour', 5)]),
    new Recipe("BlueBerry Cake", "Recipe to cook Blueberry cake",
     "https://www.kingarthurbaking.com/sites/default/files/styles/featured_image/public/2022-05/Tomato-Pie_0256.jpg?itok=c63mh-z9",
     [new Ingredient('BlueBerry', 100),
    new Ingredient('cheese', 5)]),
  ];

  recipeSelected = new EventEmitter<Recipe>();

  getRecipes() {
    return this.recipes.slice(); // copy of the array
  }

  addIngredientsToShoppingList(ingredient: Ingredient[]) {
    this.slService.addIngredients(ingredient);

  }

  getRecipe(index: number) {
    return this.recipes[index];
  }
}
