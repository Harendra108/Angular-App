import { Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Subject } from "rxjs";

@Injectable()
export class RecipeService {

  recipesChanged = new Subject<Recipe[]>();

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

  getRecipes() {
    return this.recipes.slice(); // copy of the array
  }

  addIngredientsToShoppingList(ingredient: Ingredient[]) {
    this.slService.addIngredients(ingredient);

  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, recipe: Recipe) {
    this.recipes[index] = recipe;
    this.recipesChanged.next(this.recipes.slice());
  }
}
