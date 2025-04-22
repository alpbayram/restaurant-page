import "../styles/style.css";
import "../styles/reset.css";
import "../styles/fonts.css";
import homeRender from "../scripts/home";

(function navRender() {
	const home = document.querySelector(".home");

	home.addEventListener("click", changeDom);

	function changeDom() {
		homeRender();
	}
})()
