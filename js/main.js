const toggleMenu = document.querySelector('.burger-menu');
const navInput = document.querySelector('.nav form input[type="search"]');
const landing = document.querySelector('.landing');
const landingBullets = document.querySelectorAll('.landing .bullets li');
const shuffleBtns = document.querySelectorAll('.portfolio-items .tabs li');
const portfolioItems = document.querySelectorAll('.portfolio-items .images .img-box');
const testimItems = document.querySelectorAll('.testimonials .testims');
const testimBullets = document.querySelectorAll('.testimonials .bullets li');

// Header Functionality
toggleMenu.addEventListener('click', () => {
	navBar.classList.toggle('open');
});

navInput.addEventListener('focus', openSearchBar);
navInput.addEventListener('blur', closeSearchBar);

function openSearchBar() {
	this.parentElement.style.flexBasis = '100%';
	this.parentElement.parentElement.querySelector('ul').style.display = 'none';
}
function closeSearchBar() {
	this.parentElement.style.flexBasis = '12%';
	this.parentElement.parentElement.querySelector('ul').style.display = 'flex';
}

// Add Carousel Functionality
landingBullets.forEach((bullet) => {
	bullet.onclick = function () {
		landing.style.backgroundImage = `url('../images/landing/${this.dataset.slide}')`;
		this.parentElement.querySelector('.active').classList.remove('active');
		this.classList.add('active');
	};
});

// Portfolio Functionality
shuffleBtns.forEach((btn) => {
	btn.addEventListener('click', portfolioShuffle);
});

function portfolioShuffle() {
	this.parentElement.querySelector('.active').classList.remove('active');
	this.classList.add('active');

	if (this.dataset.shuffle === 'all') {
		portfolioItems.forEach((item) => (item.style.display = 'grid'));
	} else {
		portfolioItems.forEach((item) => {
			item.classList.contains(this.dataset.shuffle)
				? (item.style.display = 'grid')
				: (item.style.display = 'none');
		});
	}
}

// Testimonilas Functionality
testimBullets.forEach((bullet) => {
	bullet.onclick = function () {
		this.parentElement.querySelector('.active').classList.remove('active');
		this.classList.add('active');

		testimItems.forEach((item) => {
			item.classList.contains(this.dataset.tabs) ? item.classList.add('active') : item.classList.remove('active');
		});
	};
});
