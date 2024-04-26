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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24gKCkge1xuXHRjb25zdCBlbGVtZW50U3RhcnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3Bhbi1zdGFydCcpO1xuXHRjb25zdCBlbGVtZW50TWlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNwYW4tbWlkZGxlJyk7XG5cdGNvbnN0IGVsZW1lbnRFbmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3Bhbi1lbmQnKTtcblx0Y29uc3Qgc3dpcGVyID0gbmV3IFN3aXBlcignLnByb2plY3RzLXNsaWRlcicsIHtcblx0XHRzcGFjZUJldHdlZW46IDI0LFxuXHRcdGR5bmFtaWNNYWluQnVsbGV0czogMyxcblx0XHRzbGlkZXNQZXJWaWV3OiBcImF1dG9cIixcblx0XHQvLyBsb29wOiB0cnVlLFxuXHRcdGJyZWFrcG9pbnRzOiB7XG5cdFx0XHQxMDI0OiB7XG5cdFx0XHRcdHNsaWRlc1BlclZpZXc6IFwiYXV0b1wiLFxuXHRcdFx0fSxcblx0XHRcdDc2ODoge1xuXHRcdFx0XHRzbGlkZXNQZXJWaWV3OiAyLFxuXHRcdFx0fSxcblx0XHRcdDA6IHtcblx0XHRcdFx0c2xpZGVzUGVyVmlldzogMSxcblx0XHRcdH0sXG5cdFx0fSxcblxuXHRcdG5hdmlnYXRpb246IHtcblx0XHRcdG5leHRFbDogJy5zd2lwZXItYnV0dG9uLW5leHQnLFxuXHRcdFx0cHJldkVsOiAnLnN3aXBlci1idXR0b24tcHJldicsXG5cdFx0fSxcblx0XHRvbjoge1xuXHRcdFx0Ly/QldGB0LvQuCDRgdC70LDQudC0INC/0L7RgdC70LXQtNC90LjQuVxuXHRcdFx0cmVhY2hFbmQ6ICgpID0+IHtcblx0XHRcdFx0ZWxlbWVudEVuZC5jbGFzc0xpc3QuYWRkKCdzcGFuLWFjdGl2ZScpO1xuXHRcdFx0XHRlbGVtZW50TWlkLmNsYXNzTGlzdC5yZW1vdmUoJ3NwYW4tYWN0aXZlJyk7XG5cdFx0XHR9LFxuXHRcdFx0Ly/QldGB0LvQuCDRgdC70LDQudC0INC/0LXRgNCy0YvQuVxuXHRcdFx0cmVhY2hCZWdpbm5pbmc6ICgpID0+IHtcblx0XHRcdFx0ZWxlbWVudFN0YXJ0LmNsYXNzTGlzdC5hZGQoJ3NwYW4tYWN0aXZlJyk7XG5cdFx0XHRcdGVsZW1lbnRNaWQuY2xhc3NMaXN0LnJlbW92ZSgnc3Bhbi1hY3RpdmUnKTtcblx0XHRcdH0sXG5cdFx0XHQvLyDQldGB0LvQuCDQvdC1INC90LDRh9Cw0LvRjNC90LDRjyDQuCDQvdC1INC60L7QvdC10YfQvdCw0Y8g0L/QvtC30LjRhtC40Y9cblx0XHRcdGZyb21FZGdlOiAoKSA9PiB7XG5cdFx0XHRcdGVsZW1lbnRTdGFydC5jbGFzc0xpc3QucmVtb3ZlKCdzcGFuLWFjdGl2ZScpO1xuXHRcdFx0XHRlbGVtZW50RW5kLmNsYXNzTGlzdC5yZW1vdmUoJ3NwYW4tYWN0aXZlJyk7XG5cdFx0XHRcdGVsZW1lbnRNaWQuY2xhc3NMaXN0LmFkZCgnc3Bhbi1hY3RpdmUnKTtcblx0XHRcdH1cblx0XHR9XG5cdH0pXG5cblx0Y29uc3QgaXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvamVjdHMtaXRlbScpXG5cdHN3aXBlci5vbignc2xpZGVDaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XG5cdFx0Y29uc29sZS5sb2coaXRlbXNbc3dpcGVyLnJlYWxJbmRleF0pXG5cdFx0aXRlbXNbMF0uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcblx0XHRpdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xuXHRcdFx0aXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKVxuXHRcdH0pXG5cdFx0aXRlbXNbc3dpcGVyLnJlYWxJbmRleF0uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcblx0fSlcblx0XG5cdGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jylcblx0Y29uc3QgYnVyZ2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ1cmdlcicpXG5cdGNvbnN0IG1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyX19tZW51Jylcblx0YnVyZ2VyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG5cdFx0dGhpcy5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKVxuXHRcdG1lbnUuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJylcblx0XHRib2R5LmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpXG5cdH0pXG59KVxuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2Nyb2xsLXRvcCcpLm9uY2xpY2sgPSAoKSA9PiB7XG5cdHdpbmRvdy5zY3JvbGxUbyhwYWdlWU9mZnNldCwgMCk7XG59Il0sImZpbGUiOiJtYWluLmpzIn0=
