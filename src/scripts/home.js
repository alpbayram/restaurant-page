import Image from "../images/cookie-hero-low.avif";

export default function renderHome() {
	const content = document.querySelector("#content");
	const gridContainer = document.querySelector(".grid-container");
	if (!(gridContainer.dataset.status === "home")) {
		while (content.firstChild) {
			content.firstChild.remove();
		}
		
	const url = `url("${Image}")`;
	
	gridContainer.style.backgroundImage = url;

	// linear-gradient(rgba(0,0,0,0.0), rgba(0,0,0,0.0)),

	const heroAlignContainer = document.createElement("div");

	const heroContainer = document.createElement("div");
	const heroText1 = document.createElement("h6");
	const heroText2 = document.createElement("h1");
	const heroText3 = document.createElement("h6");
	const heroButton = document.createElement("button");
	const heroButtonContainer = document.createElement("div");

	gridContainer.dataset.status = "home";

	heroAlignContainer.classList.add("hero-align-container");
	heroContainer.classList.add("hero-container");
	heroText1.classList.add("hero-text-1");
	heroText2.classList.add("hero-text-2");
	heroText3.classList.add("hero-text-3");
	heroButton.classList.add("reservation")
	heroButtonContainer.classList.add("reservation-container")
	heroText1.textContent = "WELCOME TO";
	heroText2.textContent = "SEZI COOKIES";
	heroText3.textContent = "Cookie. Coffe. Tea. Sweets.";
	heroButton.textContent="RESERVATION"
	content.appendChild(heroAlignContainer);
	heroAlignContainer.appendChild(heroContainer);
	heroContainer.appendChild(heroText1);
	heroContainer.appendChild(heroText2);
	heroContainer.appendChild(heroText3);
	heroButtonContainer.appendChild(heroButton);
	heroContainer.appendChild(heroButtonContainer);
	}

}
