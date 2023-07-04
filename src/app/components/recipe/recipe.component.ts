import { Component } from '@angular/core';
import { RecipeService } from 'src/app/services/recipe.service';
import { single, singleRecipe } from '../../models/single.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent {
  single!:singleRecipe
  id!:string
  constructor(private recipe: RecipeService , private activeRoute :ActivatedRoute){
      activeRoute.params.subscribe(res => this.id= res['id'])
      recipe.singleRecipe(this.id).subscribe(res=>this.single=res)
  }

}
