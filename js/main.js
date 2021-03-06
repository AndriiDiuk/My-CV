const headerNav = document.querySelector('.header')

/*==================== SHOW MENU ====================*/
function navMenu() {
	const mainToggle = document.querySelector('.main__toggle')
	const closeNav = document.querySelector('.header__nav-close')
	const navLink = document.querySelectorAll('.nav__link')

	mainToggle.addEventListener('click', () => {
		headerNav.classList.add('visible');
	})
	navLink.forEach(n => n.addEventListener('click', () => {
		headerNav.classList.remove('visible');
	}))
	closeNav.addEventListener('click', () => {
		headerNav.classList.remove('visible');
	})
}
navMenu();

/*==================== SHOW SCROLL TOP ====================*/
function scrollTop() {
	const scrollTop = document.getElementById('scroll-top');

	if (this.scrollY >= 200) {
		scrollTop.classList.add('show-scroll')
		headerNav.classList.remove('visible');
	} else {
		scrollTop.classList.remove('show-scroll')
	}
}
window.addEventListener('scroll', scrollTop)

/*==================== DARK LIGHT THEME ====================*/
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'bx-sun'
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx-moon' : 'bx-sun'

if (selectedTheme) {
	document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
	themeButton.classList[selectedIcon === 'bx-moon' ? 'add' : 'remove'](iconTheme)
}
themeButton.addEventListener('click', () => {
	// Add or remove the dark / icon theme
	document.body.classList.toggle(darkTheme)
	themeButton.classList.toggle(iconTheme)

	localStorage.setItem('selected-theme', getCurrentTheme())
	localStorage.setItem('selected-icon', getCurrentIcon())
})
/*==================== Scroll Reveal ====================*/
const sr = ScrollReveal({
	origin: "top",
	distance: "60px",
	duration: 2000,
	delay: 400,
	// reset: true
})
sr.reveal(`.social`)
sr.reveal(`.profile`, { delay: 600, interval: 10 })
sr.reveal(`.skills`, { delay: 400 })
sr.reveal(`.education`, { delay: 600, interval: 10 })
sr.reveal(`.portfolio`, { delay: 400 })
sr.reveal(`.languages`, { delay: 600 })
sr.reveal(` .portfolio__btns`, { origin: 'right' })
/*======================================================*/