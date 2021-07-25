const handleToggleMenu = () => {
	const menuToggle = document.querySelector(".menu-toggle");
	const menu = document.querySelector(".header-menu");
	if (!menuToggle || !menu) return;
	menuToggle.addEventListener("click", () => {
		menu.classList.add("is-active");
	});
	document.addEventListener("click", (e) => {
		if (!menu.contains(e.target) && !e.target.matches(".menu-toggle")) {
			menu.classList.remove("is-active");
		}
	});
};
handleToggleMenu();
