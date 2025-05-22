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

});

$(function($) {
	$('.section-carousel__slider').slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		dots:false,
		arrows:false,
		responsive: [
		    {
		      breakpoint: 1200,
		      settings: {
		        slidesToShow: 2,
		        dots: true,
		        arrows:false,
		        adaptiveHeight:true
		      }
		    },
		    {
		      breakpoint: 768,
		      settings: {
		        slidesToShow: 1,
		        dots: true,
		        arrows:false,
		      }
		    }
		  ]
	});
});

$(function($) {
 	wow = new WOW(
      {
      boxClass:     'wow',      // default
      animateClass: 'animated', // default
      offset:       0,          // default
      mobile:       true,       // default
      live:         true        // default
    }
    )
    wow.init();
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
 
