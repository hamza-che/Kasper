const toggleMenu = document.querySelector('.burger-menu');
const navBar = document.querySelector('.nav');
const header = document.querySelector('header');
const navInput = document.querySelector('.nav form input[type="search"]');
const landing = document.querySelector('.landing');

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
