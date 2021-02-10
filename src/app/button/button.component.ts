import { Component, OnInit } from '@angular/core';
import { GetRecipesService } from '../get-recipes.service'; 

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  public myRecipes: [];
  constructor(private getRecipeService: GetRecipesService) { }

  fetchMyRecipes() {
    this.getRecipeService.getMyRecipes().subscribe((result) => {
      console.log(result);
      return this.myRecipes = result;
    });
  }
  ngOnInit(): void {
  }

}
