var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
	acc[i].addEventListener("click", function () {
		this.classList.toggle("active");
		var panel = this.nextElementSibling;
		if (panel.style.maxHeight) {
			panel.style.maxHeight = null;
		} else {
			panel.style.maxHeight = panel.scrollHeight + "px";
		}
	});
}
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJhY2MuanMiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIGFjYyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJhY2NvcmRpb25cIik7XG52YXIgaTtcblxuZm9yIChpID0gMDsgaSA8IGFjYy5sZW5ndGg7IGkrKykge1xuXHRhY2NbaV0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcblx0XHR0aGlzLmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XG5cdFx0dmFyIHBhbmVsID0gdGhpcy5uZXh0RWxlbWVudFNpYmxpbmc7XG5cdFx0aWYgKHBhbmVsLnN0eWxlLm1heEhlaWdodCkge1xuXHRcdFx0cGFuZWwuc3R5bGUubWF4SGVpZ2h0ID0gbnVsbDtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cGFuZWwuc3R5bGUubWF4SGVpZ2h0ID0gcGFuZWwuc2Nyb2xsSGVpZ2h0ICsgXCJweFwiO1xuXHRcdH1cblx0fSk7XG59Il0sImZpbGUiOiJhY2MuanMifQ==
