import "../styles/style.css";
import "../styles/reset.css";
import "../styles/fonts.css";
import "../styles/menu.css";
import "../styles/about.css";
import homeRender from "../scripts/home.js";
import menuRender from "../scripts/menu.js";
import aboutRender from "../scripts/about.js";

(function navRender() {
	const header = document.querySelector(".header");
	
	header.addEventListener("click", changeDom);
	homeRender();

	function changeDom(event) {
		if (event.target.matches(".home")) {
			homeRender();
		} else if (event.target.matches(".menu")) {
			menuRender();
		} else if (event.target.matches(".about")) {
			aboutRender();
		}
	}
})();
