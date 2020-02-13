export default class RecipeElement {
	constructor(recipe) {
		this.recipe = recipe;
		this.element = document.createElement('div');
	}
	ingredientsList = () => {
		const inglist  = document.createElement('ul');
		this.recipe.ingredients.map(ing => {
			const ingListItem = document.createElement('li');
			ingListItem.innerText = ing.text;
			inglist.appendChild(ingListItem);
		});
		return inglist;
	}
	createRecipeElement = () => {
		this.element.className = 'recipe-item';
		this.element.innerHTML = `
			<h2>${this.recipe.name}</h2>
			<img src=${this.recipe.imageUrl} />`;
		this.element.appendChild(this.ingredientsList());
		return this;
	}
}
