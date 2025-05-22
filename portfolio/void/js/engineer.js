$(function($) {

	// POPUPS
	$(document).on("click",'.settings', function(){
		$('.popup_settings').parent('.popup-wrap').toggleClass('active');
	});
	$(document).on("click",'.popup_settings .popup__close', function(){
		$('.popup_settings').parent('.popup-wrap').removeClass('active');
	});

	$(document).on("click",'.choice-body button', function(){
		$('.popup_select').parent('.popup-wrap').toggleClass('active');
	});
	$(document).on("click",'.popup_select .popup__close', function(){
		$('.popup_select').parent('.popup-wrap').removeClass('active');
	});

	$(document).on("click",'.menu__link', function(){
		$(this).toggleClass('active');
		$(this).next('.menu__sub').slideToggle();
	});

	// BURGER

	var clickDelay      = 500,
    clickDelayTimer = null;

	$('.burger-click-region').on('click', function () {
	  
	  if(clickDelayTimer === null) {
	  
	    var $burger = $(this);
	    $burger.toggleClass('active');
	    $burger.parent().toggleClass('is-open');
	    $('.section-row__sidebar').toggleClass('active');

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

// SWITCH AND ACTIVE
$(function($) {
	$(document).on("click",'.switch-box__col', function(){
	
		$(this).toggleClass('active');
	
	});
});

$(function($) {
	$(document).on("click",'.switch-active__col', function(){
	
		$(this).parent('.switch-active__row').toggleClass('active');
	
	});
});

// TABS
(function($) {
$(function() {
  
  $('ul.tabs__caption').on('click', 'li:not(.active)', function() {
    $(this)
      .addClass('active').siblings().removeClass('active')
      .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
  });
  
});
})(jQuery);


// ANIMATION
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

// LOADER
$(window).load(function() {
	$(".loader_inner").fadeOut();
	$(".loader").delay(1000).fadeOut("slow");

	setTimeout(function () {
	    $(".loader-wrap").addClass("active").delay(1000);
	}, 1000);
});

