$(function($) {
	//BURGER
	var clickDelay      = 500,
    clickDelayTimer = null;

	$('.burger-click-region').on('click', function () {
	  
	  if(clickDelayTimer === null) {
	  
	    var $burger = $(this);
	    $burger.toggleClass('active');
	    $burger.parent().toggleClass('is-open');
	    $('.header__nav').toggleClass('active');

	    if(!$burger.hasClass('active')) {
	      $burger.addClass('closing');
	    }

	    clickDelayTimer = setTimeout(function () {
	      $burger.removeClass('closing');
	      clearTimeout(clickDelayTimer);
	      clickDelayTimer = null;
	    }, clickDelay);
	  }
	});

	//BANNER CAROUSEL
	$('.banner-carousel').slick({
	  infinite: true,
	  speed: 500,
	  fade: true,
	  cssEase: 'linear',
	  dots:false,
	  adaptiveHeight: true
	});

	//IMAGE CAROUSEL
	$('.image-carousel').slick({
	  infinite: true,
	  speed: 500,
	  dots:true,
	  arrows:false,
	  fade: true,
	  autoplay:true
	});

	//OUR PRODUCTS CAROUSEL
	$('.our-products-carousel').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		centerMode: true,
		infinite: true,
		speed: 500,
		dots:true,
		arrows:true,
		autoplay:true,
		dots:false,
		variableWidth:true
	});
});