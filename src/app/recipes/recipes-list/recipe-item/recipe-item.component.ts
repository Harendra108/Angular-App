import { Component, Injectable, Input } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
@Injectable()
export class RecipeItemComponent {
  @Input() recipe: Recipe;

  constructor(private recipeService: RecipeService) {

  }

  ngOnInit() {

  }

  onSelected() {
    this.recipeService.recipeSelected.emit(this.recipe);
  }

}
