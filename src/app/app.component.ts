import { Component } from '@angular/core';
import { GetRecipesService } from './get-recipes.service'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mg-testapp-petrecipes';
  public recipes:[] = [];

  constructor(private getRecipeService: GetRecipesService) {}
  fetchRecipes() {
    this.getRecipeService.getRecipes().subscribe((result) => {
      console.log(result);
    });
  }
  // this fetch recipes would have been for if I could get the API to work
}
