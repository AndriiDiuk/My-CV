/*==================== SHOW MENU ====================*/
function navMenu() {
	const headerNav = document.querySelector('.header')
	const mainToggle = document.querySelector('.main__toggle')
	const closeNav = document.querySelector('.header__nav-close')
	// const navLink = document.querySelector('.nav__link')

	mainToggle.addEventListener('click', () => {
		headerNav.classList.add('visible');
	})
	closeNav.addEventListener('click', () => {
		headerNav.classList.remove('visible');
	})
}
navMenu();
/*==================== SHOW SCROLL TOP ====================*/
function scrollTop() {
	const scrollTop = document.getElementById('scroll-top');
	const headerNav = document.querySelector('.header')

	if (this.scrollY >= 100) {
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

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx-moon' : 'bx-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
	// If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
	document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
	themeButton.classList[selectedIcon === 'bx-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
	// Add or remove the dark / icon theme
	document.body.classList.toggle(darkTheme)
	themeButton.classList.toggle(iconTheme)
	// We save the theme and the current icon that the user chose
	localStorage.setItem('selected-theme', getCurrentTheme())
	localStorage.setItem('selected-icon', getCurrentIcon())
})

