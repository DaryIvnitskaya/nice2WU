$(function($) {
	/*Slider*/
	$('.person-slider').slick({
	  infinite: true,
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  arrows:true,
	  dots:false,
	  fade:true
	});

	$('.carousel-game-player').slick({
	  slidesToShow: 4,
	  slidesToScroll: 1,
	  arrows:true,
	  dots:false
	});

	$('.carousel-single-player').slick({
	  infinite: true,
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  arrows:true,
	  dots:false,
	  fade:true
	});

	/*Btn*/
	$(document).on("click",'.btn-div', function(){
		$('.choice-page__wrap,.choice-page__dividend').toggleClass('active');
	});

	$(document).on("click",'.arrow-back_div', function(){
		$('.choice-page__wrap,.choice-page__dividend').toggleClass('active');
	});

	$(document).on("click",'.btn-ran', function(){
		$('.choice-page__wrap,.choice-page__ranking').toggleClass('active');
	});

	$(document).on("click",'.arrow-back_ran', function(){
		$('.choice-page__wrap,.choice-page__ranking').toggleClass('active');
	});
});
