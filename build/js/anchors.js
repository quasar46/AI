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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJhbmNob3JzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGFuY2hvcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdhW2hyZWYqPVwiI1wiXScpXG5cbmZvciAobGV0IGFuY2hvciBvZiBhbmNob3JzKSB7XG5cdGFuY2hvci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpXG5cdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcl9fbWVudScpLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpXG5cdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ1cmdlcicpLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpXG5cdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpXG5cdFx0Y29uc3QgYmxvY2tJRCA9IGFuY2hvci5nZXRBdHRyaWJ1dGUoJ2hyZWYnKS5zdWJzdHIoMSlcblxuXHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGJsb2NrSUQpLnNjcm9sbEludG9WaWV3KHtcblx0XHRcdGJlaGF2aW9yOiAnc21vb3RoJyxcblx0XHRcdGJsb2NrOiAnc3RhcnQnXG5cdFx0fSlcblx0fSlcbn0iXSwiZmlsZSI6ImFuY2hvcnMuanMifQ==
