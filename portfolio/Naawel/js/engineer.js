$(function($) {
	/*Burger*/
	var clickDelay      = 500,
    clickDelayTimer = null;

	$('.burger-click-region').on('click', function () {
	  
	  if(clickDelayTimer === null) {
	  
	    var $burger = $(this);
	    $burger.toggleClass('active');
	    $('.header__nav').toggleClass('active');
	    $burger.parent().toggleClass('is-open');

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

  
    var $slickSliderTab = $('.template-tabs__box').slick({
		infinite: true,
		lazyLoad: 'ondemand',
		speed: 300,
		slidesToShow: 1,
		adaptiveHeight: true,
		arrows: false,
		fade: true,
		cssEase: 'linear',
		useCSS: true
	});

	$slickSliderTab.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
		var slideIdTab = $('.template__logos').eq(nextSlide).attr('id');
		console.log(slideIdTab);
		var $itsTabTab = $('.template-tabs__tab[data-slide = "#' +  slideIdTab + '"]');
		if($itsTabTab.hasClass('active')) {
			return
		}
		$('.template-tabs__tab').not($itsTabTab).removeClass('active').blur().unbind('mouseenter mouseleave');
		$itsTabTab.addClass('active');
	});


	$('.template-tabs__tab').click(function (e) {
		var $thisTabTab = $(this);
		if($thisTabTab.hasClass('active')) {
			return
		}
		var thisSlideIndexTab = $($thisTabTab.attr('data-slide')).index();
		$slickSliderTab.slick('slickGoTo', thisSlideIndexTab);

		$('.template-tabs__tab').not($thisTabTab).removeClass('active');
		$thisTabTab.addClass('active');
	});


	  (function ($) {
}(jQuery));
function Anchor(active){
     function AnchorHref(){
        var anchor=$(this.hash);
        $("html, body").animate({
            scrollTop: anchor.offset().top
        },500);
     }
     $("a.anchors").click(AnchorHref);
 }
 Anchor(true);
});




