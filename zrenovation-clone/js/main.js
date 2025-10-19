console.log("Bienvenue sur Z Rénovation !");

// Active/désactive le menu hamburger sur mobile
const navToggle = document.querySelector('.nav-toggle');
const siteNav = document.getElementById('site-nav');

if (navToggle && siteNav) {
	const closeMenu = () => {
		navToggle.setAttribute('aria-expanded', 'false');
		siteNav.classList.remove('is-open');
	};

	const toggleMenu = () => {
		const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
		navToggle.setAttribute('aria-expanded', String(!isExpanded));
		siteNav.classList.toggle('is-open', !isExpanded);
	};

	navToggle.addEventListener('click', toggleMenu);

	siteNav.addEventListener('click', (event) => {
		if (event.target.closest('a')) {
			closeMenu();
		}
	});

	window.addEventListener('resize', () => {
		if (window.innerWidth > 780) {
			closeMenu();
		}
	});
}
