var slideItem = 0;
window.onload = function() {
	setInterval(passarSlide, 4000);

	var slidewidth = document.getElementById("slideshow").offsetWidth;
	var objs = document.getElementsByClassName("slide");
	/* no FOR - Foi alterado a forma de fazer o laço, pois as versões mais recentes do javascript pegam propriedades do objeto e por isso apresentam o erro */
	for (var i = 0; i < objs.length; i++) {
			objs[i].style.width = slidewidth + 'px';
	}
}
function passarSlide() {
	var slidewidth = document.getElementById("slideshow").offsetWidth;
	
	if (slideItem >= 3) {
		slideItem = 0;
	} else {
		slideItem++;
	}

	document.getElementsByClassName("slideshowarea")[0].style.marginLeft = "-"+(slidewidth * slideItem)+"px";
}
function mudarSlide(pos) {
	slideItem = pos;
	var slidewidth = document.getElementById("slideshow").offsetWidth;
	document.getElementsByClassName("slideshowarea")[0].style.marginLeft = "-"+(slidewidth * slideItem)+"px";
}

function toggleMenu() {

	var menu = document.getElementById("menu");

	if (menu.style.display == 'none' || menu.style.display == '') { /* se tiver invisível. */
		menu.style.display = "block"; /* eu torno visivel. */
	} else {
		menu.style.display = "none";
	}
}