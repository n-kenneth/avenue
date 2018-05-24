$(function(){
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
	if ( $('.product-slider').length > 0 ) {
		$('.product-slider').slick({
			prevArrow: '<a href="#" class="slick-prev slick-arrow"><i class="fas fa-chevron-left"></i></a>',
			nextArrow: '<a href="#" class="slick-next slick-arrow"><i class="fas fa-chevron-right"></i></a>'
		});
	}

	if ( $('.product-list').length > 0 ) {
		$('.product-card img').matchHeight({
			byRow: false
		})
	}
var mixer = mixitup('.product-list');
});