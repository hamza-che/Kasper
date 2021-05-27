const toggleMenu = document.querySelector('.burger-menu');
const navBar = document.querySelector('.nav');
const header = document.querySelector('header');
const navInput = document.querySelector('.nav form input');
const landing = document.querySelector('.landing');

toggleMenu.addEventListener('click', () => {
	navBar.classList.toggle('open');
});
