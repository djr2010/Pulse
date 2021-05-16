$(document).ready(function(){
	$('.carousel__inner').slick({
		speed: 1200,
		//adaptiveHeight: true,
		prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.svg" alt="Arrow"></button>',
		nextArrow: '<button type="button" class="slick-next"><img src="icons/right.svg" alt="Arrow"></button>',
		// autoplay: true,
		// autoplaySpeed: 2000,
		// fade: true,
		// cssEase: 'linear'
		responsive: [
			{
				breakpoint: 992,
				settings: {
					dots: true,
					arrows: false,
				}
			}
		]
	});
});