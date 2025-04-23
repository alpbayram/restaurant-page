import Image from "../images/cookie-hero-low.avif";

export default function renderHome() {
	const content = document.querySelector("#content");
	const gridContainer = document.querySelector(".grid-container");
    const url = `url("${Image}")`;
	gridContainer.style.backgroundImage = url

	// linear-gradient(rgba(0,0,0,0.0), rgba(0,0,0,0.0)),
	
	const heroAlignContainer = document.createElement("div");

	const heroContainer = document.createElement("div");
	const heroText1 = document.createElement("h6");
	const heroText2 = document.createElement("h1");
	const heroText3 = document.createElement("h6");
    
   

	gridContainer.dataset.status = "home";

	heroAlignContainer.classList.add("hero-align-container");
	heroContainer.classList.add("hero-container");
	heroText1.classList.add("hero-text-1");
	heroText2.classList.add("hero-text-2");
	heroText3.classList.add("hero-text-3");
    heroText1.textContent="WELCOME TO"
 heroText2.textContent="SEZİŞ COOKIEŞ"
  heroText3.textContent="Cookie. Coffe. Tea. Sweets."
	content.appendChild(heroAlignContainer);
	heroAlignContainer.appendChild(heroContainer);
	heroContainer.appendChild(heroText1);
	heroContainer.appendChild(heroText2);heroContainer.appendChild(heroText3);
}
