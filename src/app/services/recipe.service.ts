import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Hit, all } from '../models/recipe.model';
import { single, singleRecipe } from '../models/single.model';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  baseUrl='https://api.edamam.com/api/recipes/v2?'
  recipeUrl='https://api.edamam.com/api/recipes/v2/44485e36696fcd850d5389af63634dae?type=public&app_id=1caefdbc&app_key=1ac0dac0653d3eb048cfe6f74a644a67'
  app_key=environment.app_key
  app_id=environment.app_id
  constructor(private http:HttpClient) {}
  getRecipe(input:string):Observable<Hit[]>{
    return this.http.get<all>(this.baseUrl,{
      params:{
        app_key:this.app_key,
        app_id:this.app_id,
        q:input,
        type:'public'
      }
    }).pipe(map(res=>res.hits))
  }
  singleRecipe():Observable<singleRecipe>{
    return this.http.get<single>(this.recipeUrl).pipe(map(res=>res.recipe))
  }


}
