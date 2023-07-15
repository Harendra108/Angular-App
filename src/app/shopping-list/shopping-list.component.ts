import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit{

  ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10)
  ];


  constructor() {
    console.log("Inside shopping list");

  }

  ngOnInit(): void {
    console.log("Inside shopping list - ng");
  }

  onIngredientAdded(ingredient: Ingredient) {
    console.log("Ingredient added", ingredient);
    this.ingredients.push(ingredient);
  }


}
