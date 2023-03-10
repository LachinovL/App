const isMobile = {
	Android: function () {
		return navigator.userAgent.match(/Android/i)
	},
	BlackBerry: function () {
		return navigator.userAgent.match(/BlackBerry/i)
	},
	iOS: function () {
		return navigator.userAgent.match(/iPhone|iPad|iPod/i)
	},
	Opera: function () {
		return navigator.userAgent.match(/Opera Mini/i)
	},
	webOS: function () {
		return navigator.userAgent.match(/webOS/i)
	},
	Windows: function () {
		return navigator.userAgent.match(/IEMobile/i)
	},
	any: function () {
		return (
			isMobile.Android() ||
			isMobile.BlackBerry() ||
			isMobile.iOS() ||
			isMobile.webOS() ||
			isMobile.Opera() ||
			isMobile.Windows());
	}
};

if (isMobile.any()) {
	document.body.classList.add('touch');
	let menuItems = document.querySelectorAll('.menu__item_hover');
	if (menuItems.length > 0) {
		for (let i = 0; i < menuItems.length; i++) {
			const menuItem = menuItems[i];
			menuItem.addEventListener('click', function (e) {
				menuItem.classList.toggle('active');
			});
		}
	}
} else {
	document.body.classList.add('pc');
}

const burger = document.querySelector('.burger');
if (burger) {
	const menu = document.querySelector('.menu');
	burger.addEventListener('click', function(e) {
		document.body.classList.toggle('lock');
		burger.classList.toggle('active');
		menu.classList.toggle('active');
	})
}