$(document).ready(function () {

	$('#slider').bxSlider({
		auto: true,
		randomStart: true, // random image display 
		pause: 3000, // 3 seconds  
		slideWidth: 250,
		moveSlides: 1,
		pagerCustom: '#pager',
		pagerType: "short",
		captions: true
	});
});
