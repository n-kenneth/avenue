$(function(){
	//
	if ( $('.product-zoom').length > 0 ) {
		$('.product-zoom').elevateZoom({
			cursor: 'crosshair',
			borderSize: 1,
			zoomWindowOffety: 50,
			zoomWindowOffetx: 30
		});
		$('body').css({
			'overflow-x': 'hidden'
		});
	}
	// Product view slider
	if ( $('.product-slider').length > 0 ) {
		$('.product-slider').slick({
			prevArrow: '<a href="#" class="slick-prev slick-arrow"><i class="fas fa-chevron-left"></i></a>',
			nextArrow: '<a href="#" class="slick-next slick-arrow"><i class="fas fa-chevron-right"></i></a>'
		});
	}
	// home page slider
	if ( $('.main-banner').length > 0 ) {
		$('.main-banner').slick({
			autoplay: true,
			autoplaySpeed: 5000,
			cssEase: 'ease-in'
		});
	}
	// lookbook cards
	if ( $('.lookbook-area .product-list').length > 0 ) {
		$('.product-card img').matchHeight({
			byRow: false
		});
		var mixer = mixitup('.product-list');
	}
	

});
