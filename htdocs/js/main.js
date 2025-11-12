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

// Slider pour la section "Je transforme vos rêves en réalité"
const sliders = document.querySelectorAll('[data-slider]');

sliders.forEach((slider) => {
	const track = slider.querySelector('.hero-slider-track');
	const slides = track ? Array.from(track.querySelectorAll('.hero-slide')) : [];
	if (!track || slides.length === 0) {
		return;
	}

	const prevButton = slider.querySelector('[data-slider-prev]');
	const nextButton = slider.querySelector('[data-slider-next]');
	const dots = Array.from(slider.querySelectorAll('[data-slide]'));
	let index = 0;

	const clampIndex = (value) => {
		const total = slides.length;
		return (value + total) % total;
	};

	const update = () => {
		track.style.transform = `translateX(-${index * 100}%)`;
		dots.forEach((dot, dotIndex) => {
			dot.classList.toggle('is-active', dotIndex === index);
			dot.setAttribute('aria-pressed', dotIndex === index ? 'true' : 'false');
		});
		slider.setAttribute('data-slider-index', String(index));
	};

	const goTo = (target) => {
		index = clampIndex(target);
		update();
	};

	prevButton?.addEventListener('click', () => {
		goTo(index - 1);
	});

	nextButton?.addEventListener('click', () => {
		goTo(index + 1);
	});

	dots.forEach((dot) => {
		dot.addEventListener('click', () => {
			const target = Number(dot.getAttribute('data-slide'));
			if (Number.isNaN(target)) {
				return;
			}
			goTo(target);
		});
	});

	slider.setAttribute('tabindex', '0');
	slider.addEventListener('keydown', (event) => {
		if (event.key === 'ArrowLeft') {
			event.preventDefault();
			goTo(index - 1);
		}
		if (event.key === 'ArrowRight') {
			event.preventDefault();
			goTo(index + 1);
		}
	});

	update();
});
