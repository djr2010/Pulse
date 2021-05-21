$(document).ready(function(){
	// Slider
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
	// /Slider
	// Tabs
	$('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
		$(this)
			.addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
			.closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
	});
	
	// Toggle content list
	function toggleSlide(link) {
		$(link).each(function(i) {
			$(this).on('click', function(e) {
				e.preventDefault();
				$('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
				$('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
			});
		});
	}
	toggleSlide('.catalog-item__link');
	toggleSlide('.catalog-item__back');
	// /Tabs
	// Modals
	$('[data-modal="consultation"]').on('click', function () {
		$('.overlay, #consultation').fadeIn('slow');
	});
	
	$('.button_mini').each(function (i) {
		$(this).on('click', function () {
			$('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
			$('.overlay, #order').fadeIn('slow');
		});
	});
	
	$('.modal__close').on('click', function () {
		$('.overlay, #consultation, #order, #thanks').fadeOut('slow');
	});
	// /Modals
	// Validation forms
	function validationForms(form) {
		$(form).validate({
			rules: {
				// simple rule, converted to {required:true}
				tel: "required",
				// compound rule
				name: {
					required: true,
					minlength: 2
				},
				email: {
					required: true,
					email: true
				}
			},
			messages: {
				name: {
					required: "Введите, пожалуйста, Ваше имя",
					minlength: jQuery.validator.format("Имя должно содержать минимум {0} символа")
				},
				tel: "Введите, пожалуйста, номер Вашего телефона",
				email: {
					required: "Нам необходим Ваш email адрес",
					email: "Ваш email адрес должен быть в формате name@domain.com"
				}
			}
		});
	}
	
	validationForms('#consultation-form');
	
	validationForms('#consultation form');
	
	validationForms('#order form');
	// /Validation forms
});