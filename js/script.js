document.addEventListener("DOMContentLoaded", () => {
	const openBtn = document.getElementById("open");
	const closeBtn = document.getElementById("close");
	const menu = document.getElementById("mobile-menu");

	// toggling the hidden class in order to slide in or out the menu
	const toggleClasses = () => {
		menu.classList.toggle("open");
		openBtn.classList.toggle("hidden");
		closeBtn.classList.toggle("hidden");
	};

	openBtn.addEventListener("click", () => toggleClasses());

	closeBtn.addEventListener("click", () => toggleClasses());

	// function to ensure that the menu is closed
	const closeMenu = () => {
		menu.classList.remove("open");
		openBtn.classList.remove("hidden");
		closeBtn.classList.add("hidden");
	};

	// closing menu on visiting navigation links
	menu.addEventListener("click", () => {
		closeMenu();
	});

	// closing the menu while resizing
	window.onresize = () => {
		closeMenu();
	};
});
