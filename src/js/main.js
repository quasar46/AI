'use strict'

document.addEventListener('DOMContentLoaded', function () {
	const elementStart = document.querySelector('.span-start');
	const elementMid = document.querySelector('.span-middle');
	const elementEnd = document.querySelector('.span-end');
	const swiper = new Swiper('.projects-slider', {
		spaceBetween: 24,
		dynamicMainBullets: 3,
		slidesPerView: "auto",
		// loop: true,
		breakpoints: {
			1024: {
				slidesPerView: "auto",
			},
			768: {
				slidesPerView: 2,
			},
			0: {
				slidesPerView: 1,
			},
		},

		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		on: {
			//Если слайд последний
			reachEnd: () => {
				elementEnd.classList.add('span-active');
				elementMid.classList.remove('span-active');
			},
			//Если слайд первый
			reachBeginning: () => {
				elementStart.classList.add('span-active');
				elementMid.classList.remove('span-active');
			},
			// Если не начальная и не конечная позиция
			fromEdge: () => {
				elementStart.classList.remove('span-active');
				elementEnd.classList.remove('span-active');
				elementMid.classList.add('span-active');
			}
		}
	})

	const items = document.querySelectorAll('.projects-item')
	swiper.on('slideChange', function () {
		console.log(items[swiper.realIndex])
		items[0].classList.remove('active')
		items.forEach(item => {
			item.classList.remove('active')
		})
		items[swiper.realIndex].classList.add('active')
	})
	
	const body = document.querySelector('body')
	const burger = document.querySelector('.burger')
	const menu = document.querySelector('.header__menu')
	burger.addEventListener('click', function() {
		this.classList.toggle('active')
		menu.classList.toggle('active')
		body.classList.toggle('hidden')
	})
})

document.querySelector('.scroll-top').onclick = () => {
	window.scrollTo(pageYOffset, 0);
}