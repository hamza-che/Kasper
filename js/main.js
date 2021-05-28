const toggleMenu = document.querySelector('.burger-menu');
const navInput = document.querySelector('.nav form input[type="search"]');
const landing = document.querySelector('.landing');
const nextBtn = document.querySelector('.landing .next-btn');
const prevBtn = document.querySelector('.landing .prev-btn');
const landingBullets = document.querySelectorAll('.landing .bullets li');
const shuffleBtns = document.querySelectorAll('.portfolio-items .tabs li');
const portfolioItems = document.querySelectorAll('.portfolio-items .images .img-box');

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
nextBtn.addEventListener('click', nextImage);
prevBtn.addEventListener('click', previousImage);
let slideCount = 1;

function nextImage() {
	landing.style.backgroundImage = `url('../images/landing/landing${slideCount++}.jpg')`;
	if (slideCount > 3) {
		slideCount = 1;
	}
}
function previousImage() {
	landing.style.backgroundImage = `url('../images/landing/landing${slideCount--}.jpg')`;
	if (slideCount < 1) {
		slideCount = 3;
	}
}

landingBullets.forEach((bullet) => {
	bullet.onclick = function () {
		landing.style.backgroundImage = `url('../images/landing/${bullet.dataset.slide}.jpg')`;
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
