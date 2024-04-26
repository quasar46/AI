const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
	anchor.addEventListener('click', function (e) {
		e.preventDefault()
		document.querySelector('.header__menu').classList.remove('active')
		document.querySelector('.burger').classList.remove('active')
		document.querySelector('body').classList.remove('hidden')
		const blockID = anchor.getAttribute('href').substr(1)

		document.getElementById(blockID).scrollIntoView({
			behavior: 'smooth',
			block: 'start'
		})
	})
}