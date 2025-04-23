import "../styles/style.css";
import "../styles/reset.css";
import "../styles/fonts.css";
import "../styles/menu.css";
import homeRender from "../scripts/home.js";
import menuRender from "../scripts/menu.js";

(function navRender() {
	const home = document.querySelector(".home");

	home.addEventListener("click", changeDom);

	function changeDom() {
		homeRender();
	}
})()
