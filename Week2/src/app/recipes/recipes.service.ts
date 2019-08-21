import { Injectable } from '@angular/core';
import { Recipe } from './recipes.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  private recipes: Recipe[] = [
    {
      id: '1',
      title: 'Es Jeruk',
      imageUrl: '',
      ingredients: ['Es', 'Air', 'Jeruk']
    },
    {
      id: '2',
      title: 'Es Kelapa',
      imageUrl: '',
      ingredients: ['Air', 'Es', 'Kelapa']
    },
    {
      id: '3',
      title: 'Es Mangga',
      imageUrl: '',
      ingredients: ['Mangga', 'Es', 'Air']
    },
  ]

  constructor() { }

  getAllRecipes() {
    return [...this.recipes];
  }

  getRecipe(recipeId: string) {
    return {
      ...this.recipes.find(recipe => {
        return recipe.id === recipeId;
      })
    };
  }

  deleteRecipe(recipeId: string) {
    for (var i = 0; i < this.recipes.length; i++) {
      if (this.recipes[i].id == recipeId) this.recipes.splice(i, 1);
    }
  }
}
