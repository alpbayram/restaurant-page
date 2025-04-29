import heroImage from "../images/about.avif";

import about1Image from "../images/about1.avif";
export default function renderAbout() {
	const content = document.querySelector("#content");
	const gridContainer = document.querySelector(".grid-container");

	if (!(gridContainer.dataset.status === "about")) {
		while (content.firstChild) {
			content.firstChild.remove();
		}
		gridContainer.style.backgroundImage = "none";
		gridContainer.dataset.status = "about";
		const url = `url("${heroImage}")`;

		// linear-gradient(rgba(0,0,0,0.0), rgba(0,0,0,0.0)),

		const aboutHeader = document.createElement("div");
		aboutHeader.classList.add("about-header");
		aboutHeader.style.backgroundImage = url;
		const aboutHeaderText = document.createElement("h1");
		aboutHeaderText.textContent = "ABOUT US";
		content.appendChild(aboutHeader);
		aboutHeader.appendChild(aboutHeaderText);

		const aboutContainer = document.createElement("div");
		aboutContainer.classList.add("about-container");
		content.appendChild(aboutContainer);
		const about1 = document.createElement("div");
		about1.classList.add("about-1");
		aboutContainer.appendChild(about1);
		const aboutImageContainer = document.createElement("div");
		aboutImageContainer.classList.add("about-img");
		const aboutImage = document.createElement("img");
		aboutImage.setAttribute("src", about1Image);
		about1.appendChild(aboutImageContainer);
		aboutImageContainer.appendChild(aboutImage);

		const aboutText = document.createElement("div");
		aboutText.classList.add("about-text");
		about1.appendChild(aboutText);

		const aboutTextHeader1 = document.createElement("h6");
		aboutTextHeader1.textContent = "HEY! WELCOME TO SEZI COOKIE";
		const aboutTextHeader2 = document.createElement("h1");
		aboutTextHeader2.textContent = "OUR STORY";
		const aboutTextP1 = document.createElement("p");
		aboutTextP1.textContent =
			"Food is the foundation of true happiness. Lorem ipsum dolor amet,onsectetuer adipiscing elit aenean commodo.";
		const aboutTextP2 = document.createElement("p");
		aboutTextP2.textContent =
			"We see our customers as invited guests to a party, and we are the hosts. It’s our job every day to make every important aspect of customer experience a little bit better. Donec quam felis, nec, pellentesque eu.";
		const aboutTextButton = document.createElement("button");
        aboutTextButton.textContent="OUR MENU"
		aboutTextButton.classList.add("button");
		aboutText.appendChild(aboutTextHeader1);
		aboutText.appendChild(aboutTextHeader2);
		aboutText.appendChild(aboutTextP1);
		aboutText.appendChild(aboutTextP2);
		aboutText.appendChild(aboutTextButton);
	}
}
