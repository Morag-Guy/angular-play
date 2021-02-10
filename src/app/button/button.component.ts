import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  public myRecipes: [];
  constructor() { }

  fetchMyRecipes() {
    this.getRecipeService.getMyRecipes().subscribe((result) => {
      console.log(result);
      return this.myRecipes = result;
    });
  }

}