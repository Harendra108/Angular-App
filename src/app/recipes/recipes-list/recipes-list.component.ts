import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {

  @Output() recipeInListSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe("Tomato Pie", "Recipe to cook Tomato Pie", "https://www.kingarthurbaking.com/sites/default/files/styles/featured_image/public/2022-05/Tomato-Pie_0256.jpg?itok=c63mh-z9"),
    new Recipe("BlueBerry Cake", "Recipe to cook Blueberry cake", "https://www.kingarthurbaking.com/sites/default/files/styles/featured_image/public/2022-05/Tomato-Pie_0256.jpg?itok=c63mh-z9"),
  ];

  constructor() {}

  ngOnInit(): void {
  }

  onRecipeSelected(recipeEl: Recipe) {
    this.recipeInListSelected.emit(recipeEl);
  }





}
