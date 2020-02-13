export default class Recipe {
  constructor(recipe) {
    this.name = recipe.label;
    this.imageUrl = recipe.image;
    this.ingredients = recipe.ingredients;
    this.calories = recipe.calories;
    this.nutrients = recipe.totalNutrients
  }
}