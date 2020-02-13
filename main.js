import Recipe from './components/Recipe.js';
import HttpClient from './components/HttpClient.js';
import RecipeElement from './components/RecipeElement.js';
import Loader from './components/Loader.js';

const APP_ID = 'e36b132d';
const APP_KEY = '99a46b8711c6759f6af84874c80a8831';
const API_URL = 'https://api.edamam.com/search';

const hc = new HttpClient(APP_ID, APP_KEY);

const rootElement = document.getElementById('root');
const searchField = document.getElementById('searchField');

const loader = new Loader('lds-grid');
loader.addLoaderElement(rootElement);

const loadDatatoThePage = (recipes, element) => {
	if(recipes.hits.length === 0) {
		element.innerHTML = '<h3>No recipes found!</h3>';
		return;
	}
	recipes.hits.map(recipe => {
		const recipeElement = new RecipeElement(new Recipe(recipe.recipe)).createRecipeElement();
		element.appendChild(recipeElement.element);
	})
}

hc.getData(API_URL, 'pulse').then(recipes => {
	loader.removeLoaderElement();
	loadDatatoThePage(recipes, rootElement);
})

// Search Handler
document.querySelector('#search>button').addEventListener('click', (e) => {
	loader.addLoaderElement(rootElement);
	hc.getData(API_URL, searchField.value)
	.then(recipes => {
		loader.removeLoaderElement();
		loadDatatoThePage(recipes, rootElement);
	})
	.catch( error => {
		console.log('eeee', error);
	})
})
