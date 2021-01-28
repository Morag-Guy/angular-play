import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetRecipesService {

  //The API url
  //Looks like this api is returning CORS console errors.
  private recipesUrl = "http://www.recipepuppy.com/api/";
  //Here is a link to some JSON I made up to get something showing
  //I think I couldn't connect to this API as I am using localhost  
  private madeup_recipes = "./assets/recipe.json";


  constructor(private http: HttpClient) {} 
    // GET ALL RECIPES
    getRecipes() {
      return this.http.get(this.recipesUrl).pipe(
        map((res: Response) => res.json)
      )
    }
    getMyRecipes() {
      return this.http.get(this.madeup_recipes);
    }
    // GET RECIPES LIST FROM FILTER
}
