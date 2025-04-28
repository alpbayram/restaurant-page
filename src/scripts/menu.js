import heroImage from "../images/our-menu.avif";
import { Menu } from "../scripts/menuModel";

export default function renderMenu() {
	const content = document.querySelector("#content");
	const gridContainer = document.querySelector(".grid-container");
	

	if(!(gridContainer.dataset.status === "menu")){
		while(content.firstChild){
			content.firstChild.remove()
		}
		gridContainer.style.backgroundImage = "none";
		gridContainer.dataset.status = "menu";
		const url = `url("${heroImage}")`;
	
		// linear-gradient(rgba(0,0,0,0.0), rgba(0,0,0,0.0)),
	
		const menuHeader = document.createElement("div");
		menuHeader.classList.add("menu-header");
		menuHeader.style.backgroundImage = url;
		const menuHeaderText = document.createElement("h1");
		menuHeaderText.textContent = "OUR MENU";
		content.appendChild(menuHeader);
		menuHeader.appendChild(menuHeaderText);
	
		const menuContainer = document.createElement("div");
		menuContainer.classList.add("menu-container");
		content.appendChild(menuContainer);
	
		const menuFull = document.createElement("div");
		menuFull.classList.add("menu-full");
		content.appendChild(menuFull);
		const menuDrinks = document.createElement("div");
		const menuFoods = document.createElement("div");
		menuDrinks.classList.add("menu-drinks");
		menuFoods.classList.add("menu-foods");
		menuContainer.appendChild(menuDrinks);
		menuContainer.appendChild(menuFoods);
	
		const menuDrinksHeader = document.createElement("div");
		menuDrinksHeader.classList.add("menu-drinks-header");
		const drinkHeader1 = document.createElement("h6");
		const drinkHeader2 = document.createElement("h1");
		drinkHeader1.textContent = "DRINKS";
		drinkHeader2.textContent = "COFFEES & TEAS";
		menuDrinksHeader.appendChild(drinkHeader1);
		menuDrinksHeader.appendChild(drinkHeader2);
		menuDrinks.appendChild(menuDrinksHeader);
		const menuFoodsHeader = document.createElement("div");
		menuFoodsHeader.classList.add("menu-foods-header");
		const foodHeader1 = document.createElement("h6");
		const foodHeader2 = document.createElement("h1");
		foodHeader1.textContent = "FOODS";
		foodHeader2.textContent = "BAKERY & LUNCH";
		menuFoodsHeader.appendChild(foodHeader1);
		menuFoodsHeader.appendChild(foodHeader2);
		menuFoods.appendChild(menuFoodsHeader);
	
	
		
	
		const menuFullHeader = document.createElement("div");
		menuFullHeader.classList.add("full-header");
		
		const fullHeader = document.createElement("h1");
		fullHeader.textContent = "FULL MENU";
		
		menuFullHeader.appendChild(fullHeader);
		
		const fullContainer = document.createElement("div")
		fullContainer.classList.add("full-container");
		
		menuFull.appendChild(menuFullHeader);
		menuFull.appendChild(fullContainer);
		Menu.myMenu.forEach(function (element, index, array) {
			if (element.category == "drink" || element.category == "food") {
				drinkAndFood(element, menuDrinks, menuFoods);
			}else{
				full(element,fullContainer)
			}
		});
	}



	

	
}

function drinkAndFood(element, menuDrinks, menuFoods) {
	const elementContainer = document.createElement("div");
	elementContainer.classList.add(`${element.category}`);
	const categoryContainer = element.category == "drink" ? menuDrinks : menuFoods;
	categoryContainer.appendChild(elementContainer);

	const imgContainer = document.createElement("div");
	imgContainer.classList.add(`${element.category}-img`);
	const img = document.createElement("img");
	img.setAttribute("src", element.img);
	imgContainer.appendChild(img);
	elementContainer.appendChild(imgContainer);

	const textContainer = document.createElement("div");
	textContainer.classList.add(`${element.category}-text-container`);
	elementContainer.appendChild(textContainer);

	const name = document.createElement("div");
	const info = document.createElement("div");
	name.classList.add(`${element.category}-name`);
	name.textContent = element.name;
	info.classList.add(`${element.category}-info`);
	info.textContent = element.info;
	textContainer.appendChild(name);
	textContainer.appendChild(info);

	const price = document.createElement("div");
	price.classList.add(`${element.category}-price`);
	price.textContent = element.price;
	elementContainer.appendChild(price);
}


function full(element, fullContainer) {

	








	

	const elementContainer = document.createElement("div");
	elementContainer.classList.add("full-item");
	
	
	fullContainer.appendChild(elementContainer)

	const imgContainer = document.createElement("div");
	imgContainer.classList.add(`full-img`);
	const img = document.createElement("img");
	img.setAttribute("src", element.img);
	imgContainer.appendChild(img);
	elementContainer.appendChild(imgContainer);

	const textContainer = document.createElement("div");
	textContainer.classList.add(`full-text-container`);
	elementContainer.appendChild(textContainer);

	const name = document.createElement("div");
	const info = document.createElement("div");
	name.classList.add(`full-name`);
	name.textContent = element.name;
	info.classList.add(`full-info`);
	info.textContent = element.info;
	textContainer.appendChild(name);
	elementContainer.appendChild(info);

	const price = document.createElement("div");
	price.classList.add(`full-price`);
	price.textContent = element.price;
	textContainer.appendChild(price);
}
