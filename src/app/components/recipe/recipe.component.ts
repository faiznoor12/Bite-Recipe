import { Component } from '@angular/core';
import { RecipeService } from 'src/app/services/recipe.service';
import { single, singleRecipe } from '../../models/single.model';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent {
  single!:singleRecipe
  constructor(private recipe: RecipeService){
      recipe.singleRecipe().subscribe(res=>this.single=res)
  }

}
