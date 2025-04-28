import drink1 from "../images/coffee-1.jpg";
import drink2 from "../images/coffee-2.jpg";
import drink3 from "../images/coffee-3.jpg";
import drink4 from "../images/coffee-4.jpg";
import drink5 from "../images/coffee-5.jpg";
import drink6 from "../images/coffee-2.jpg";

import food1 from "../images/food-1.jpg";
import food2 from "../images/food-2.jpg";
import food3 from "../images/food-3.jpg";
import food4 from "../images/food-4.jpg";
import food5 from "../images/food-5.jpg";
import food6 from "../images/food-6.jpg";

import plate1 from "../images/plate1.avif";
import plate2 from "../images/plate2.avif";
import plate3 from "../images/plate3.avif";
import plate4 from "../images/plate4.avif";
import plate5 from "../images/plate5.avif";
import plate6 from "../images/plate6.avif";

export class Menu {
	static myMenu = [];
	constructor(name, price, info, img, category) {
		this.name = name;
		this.price = price;
		this.info = info;
		this.img = img;
		this.category = category;
		Menu.myMenu.push(this);
	}
}
new Menu(
	"Caramel Vanilla Latte",
	"$4.25",
	"Espresso, steamed milk, vanilla syrup, caramel drizzle",
	drink1,
	"drink"
);
new Menu(
	"Iced Matcha Latte",
	"$3.95",
	"Ceremonial matcha, almond milk, a touch of honey",
	drink2,
	"drink"
);
new Menu(
	"Hazelnut Mocha",
	"$$4.50",
	"Espresso, chocolate, hazelnut syrup, whipped cream",
	drink3,
	"drink"
);
new Menu(
	"Strawberry Hibiscus Tea",
	"$3.75",
	"Dried hibiscus petals, fresh strawberry puree, mint",
	drink4,
	"drink"
);
new Menu(
	"Cinnamon Dolce Cappuccino ",
	"$4.10",
	"Espresso, steamed milk, cinnamon dolce sprinkle",
	drink5,
	"drink"
);
new Menu(
	"Coconut Cold Brew",
	"$4.00",
	"Smooth cold brew, coconut milk, agave nectar ",
	drink6,
	"drink"
);
new Menu(
	"Chocolate Croissant",
	"$2.85",
	"Buttery pastry filled with Belgian dark chocolate",
	food1,
	"food"
);
new Menu(
	"Avocado Toast",
	"$5.20",
	"Sourdough, smashed avocado, chili flakes, sea salt",
	food2,
	"food"
);
new Menu(
	"Spinach & Feta Wrap",
	"$4.75",
	"Spinach tortilla, crumbled feta, sun-dried tomatoes",
	food3,
	"food"
);
new Menu("Blueberry Muffin", "$3.30", "Fresh blueberries, vanilla crumb topping", food4, "food");
new Menu(
	"Turkey & Swiss Panini",
	"$6.10",
	"Roasted turkey, Swiss cheese, pesto mayo",
	food5,
	"food"
);
new Menu(
	"Quiche Lorraine",
	"$5.95",
	"Flaky crust, bacon lardons, creamy egg custard",
	food6,
	"food"
);
new Menu(
	"Rustic Mushroom Risotto",
	"$18.50",
	"Creamy arborio rice with porcini mushrooms, white wine, parmesan, and fresh thyme.",
	plate1,
	"plate"
);
new Menu(
	"Mediterranean Power Salad",
	"$14.80",
	"Grilled lemon-marinated chicken over quinoa and arugula, finished with a zesty herb dressing.",
	plate2,
	"plate"
);
new Menu(
	"Smoky Chipotle Veggie Tacos",
	"$13.40",
	"Sautéed bell peppers and onions in soft tortillas, topped with chipotle aioli and lime crema. ",
	plate3,
	"plate"
);
new Menu(
	"Lemon-Herb Chicken Bowl ",
	"$15.90",
	"Grilled lemon-marinated chicken over quinoa and arugula, finished with a zesty herb dressing.",
	plate4,
	"plate"
);
new Menu(
	"Seared Salmon Teriyaki",
	"$22.00",
	"Norwegian salmon glazed in light teriyaki sauce, served with sesame greens and sprouts.",
	plate5,
	"plate"
);
new Menu(
	"Truffle Mac and Cheese",
	"$17.25",
	"Aged cheddar and creamy béchamel, infused with black truffle oil and finished with crispy panko.",
	plate6,
	"plate"
);
export const deneme2 = Menu.myMenu