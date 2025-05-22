$(function($) {
	/*Burger*/
	var clickDelay      = 500,
    clickDelayTimer = null;

	$('.burger-click-region').on('click', function () {
	  
	  if(clickDelayTimer === null) {
	  
	    var $burger = $(this);
	    $burger.toggleClass('active');
	    $('.fullpage-wrapper').toggleClass('active');
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

	 /*INPUTS*/
	 $('.input').click(function(event) {
	   $(this).addClass('focus');
	 });

	$('.input').focusout(function(){
	    if ($(this).find('input,textarea').val().trim().length === 0){
	        $(this).removeClass('focus');    
	    }
	});
});




