import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, debounceTime, distinctUntilChanged } from 'rxjs';
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
  debounce = new Subject<string>()

  constructor(private recipe: RecipeService, private router: Router) {
    this.debounce
      .pipe(debounceTime(1000), distinctUntilChanged())
      .subscribe((value) => {
        this.getRecipe(value);
      });
    // this.getRecipe()
  }

  getRecipe(input: string) {
    this.recipe
      .getRecipe(input)
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
