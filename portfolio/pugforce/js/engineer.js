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

$(function(){
	
	var note = $('#note'),
		ts = new Date('10/04/2021 10:45 AM'),
		newYear = true;
	
	if((new Date()) > ts){
		// The new year is here! Count towards something else.
		// Notice the *1000 at the end - time must be in milliseconds
		ts = (new Date()).getTime() + 10*24*60*60*4564;
		newYear = false;
	}
		
	$('#countdown').countdown({
		timestamp	: ts,
		callback	: function(days, hours, minutes, seconds){
			
			var message = "";
			
			message += days + " day" + ( days==1 ? '':'s' ) + ", ";
			message += hours + " hour" + ( hours==1 ? '':'s' ) + ", ";
			message += minutes + " minute" + ( minutes==1 ? '':'s' ) + " and ";
			message += seconds + " second" + ( seconds==1 ? '':'s' ) + " <br />";
			
			if(newYear){
				message += "left until the new year!";
			}
			else {
				message += "left to 10 days from now!";
			}
			
			note.html(message);
		}
	});

	$('#countdown2').countdown({
		timestamp	: ts,
		callback	: function(days, hours, minutes, seconds){
			
			var message = "";
			
			message += days + " day" + ( days==1 ? '':'s' ) + ", ";
			message += hours + " hour" + ( hours==1 ? '':'s' ) + ", ";
			message += minutes + " minute" + ( minutes==1 ? '':'s' ) + " and ";
			message += seconds + " second" + ( seconds==1 ? '':'s' ) + " <br />";
			
			if(newYear){
				message += "left until the new year!";
			}
			else {
				message += "left to 10 days from now!";
			}
			
			note.html(message);
		}
	});

	$('.carousel').slick({
		dots: false,
		infinite: true,
		speed: 10000,
		arrows:false,
		autoplay:true,
		slidesToShow: 5,
		variableWidth: true,
		autoplaySpeed: 1,		
		  responsive: [
			  {
			      breakpoint: 576,
			      settings: {
					//arrows:true,
					slidesToShow: 1,
					slidesToScroll: 1,
					speed: 600,
					autoplaySpeed: 3000,
					autoplay:false,
			      }
			  }
		  ]
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
	
});