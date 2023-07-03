import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Hit } from 'src/app/models/recipe.model';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  input!: string;
  recipes!: Hit[];
  length!: number;
  constructor(private recipe: RecipeService, private router: Router) {
    // this.getRecipe()
  }

  getRecipe() {
    this.recipe
      .getRecipe(this.input)
      .subscribe({
        next: (res) => {
          this.recipes = res
          this.length = res.length

         }, error: (err) => console.log(err)

             });
  }

  assignUrl(link: string) {
    this.recipe.recipeUrl = link;
    this.router.navigateByUrl('/recipe');
  }
}
