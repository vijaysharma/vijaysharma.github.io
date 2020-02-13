export default class Loader {
	constructor(className) {
		this.element = document.createElement('div');
		this.element.className = className;
		this.element.innerHTML = `<div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>`;
	}
	addLoaderElement = (holdingElement) => {
		var child = holdingElement.lastElementChild;
		while (child) {
			holdingElement.removeChild(child);
			child = holdingElement.lastElementChild;
		}
		holdingElement.appendChild(this.element);
	}
	removeLoaderElement = () => {
		this.element.parentNode.removeChild(this.element);
	}
}
