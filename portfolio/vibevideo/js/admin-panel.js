$(function($) {

	//BURGER
	var clickDelay      = 500,
    clickDelayTimer = null;

	$('.burger-click-region').on('click', function () {
	  
	  if(clickDelayTimer === null) {
	  
	    var $burger = $(this);
	    $burger.toggleClass('active');
	    $burger.parent().toggleClass('is-open');
	    $('.admin-panel-sidebar').toggleClass('sidebar-closing');

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


	$(window).scroll(function(){
	    
	    if($(window).scrollTop() > 0)
	    {
	        $('.header').addClass('fixed');
	    }
	    else
	    {
	      $('.header').removeClass('fixed');
	   }
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

	$(function() {
			  
		  $('ul.tab__head').on('click', 'li:not(.active)', function() {
		    $(this)
		      .addClass('active').siblings().removeClass('active')
		      .closest('div.tab').find('div.tab__body').removeClass('active').eq($(this).index()).addClass('active');

		  });
		  
	});

	$('body').on('click', '.password-control', function(){
		if ($('#password-input').attr('type') == 'password'){
			$(this).addClass('view');
			$('#password-input').attr('type', 'text');
		} else {
			$(this).removeClass('view');
			$('#password-input').attr('type', 'password');
		}
		return false;
	});

	$(function($) {
		$(document).on("click",'.change-color', function(){
		
			$(this).toggleClass('changed-color');
			$('.admin-panel').toggleClass('color');
		
		});
	});



});


