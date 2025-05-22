$(function($) {

	setTimeout(function(){
	    $('body').addClass('body_visible');
	}, 200);

	//BURGER
	var clickDelay      = 500,
    clickDelayTimer = null;

	$('.burger-click-region').on('click', function () {
	  
	  if(clickDelayTimer === null) {
	  
	    var $burger = $(this);
	    $burger.toggleClass('active');
	    $burger.parent().toggleClass('is-open');
	    $('.header__nav').toggleClass('active');
	    $('.header__burger').toggleClass('active');
	    $('.header__logo').toggleClass('active');
	    $('body').toggleClass('scroll');

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

	$(document).on("click",'.header__nav ul li a', function(){

		var $burger = $('.burger-click-region');
	
		$('.header__nav').removeClass('active');
		$('.header__burger').removeClass('active');
		$('.header__logo').removeClass('active');
		$('body').removeClass('scroll');
		$burger.removeClass('active');
	    $burger.parent().removeClass('is-open');
	
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

	$(window).ready(function(){
	    
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

	$(function() {
			  
		  $('ul.big-tab__head').on('click', 'li:not(.active)', function() {
		    $(this)
		      .addClass('active').siblings().removeClass('active')
		      .closest('div.big-tab').find('div.big-tab__body').removeClass('active').eq($(this).index()).addClass('active');

		  });
		  
	});

	// $(function() {
			  
	// 	  $('ul.device__head').on('click', 'li:not(.dev-active)', function() {
	// 	    $(this).addClass('dev-active').siblings().removeClass('dev-active').closest('div.big-tab').find('div.device__body').removeClass('dev-active').eq($(this).index()).addClass('dev-active');

	// 	  });
		  
	// });

	$(function($) {
		$(document).on("click",'.li-mobile', function(){		
			$('.device__body_mobile').addClass('dev-active');
			$('.device__body_tablet').removeClass('dev-active');
			$('.device__body_desktop').removeClass('dev-active');

			$(this).addClass('dev-active');
			$('.li-tablet').removeClass('dev-active');
			$('.li-desktop').removeClass('dev-active');
		});
	});
	$(function($) {
		$(document).on("click",'.li-tablet', function(){		
			$('.device__body_mobile').removeClass('dev-active');
			$('.device__body_tablet').addClass('dev-active');
			$('.device__body_desktop').removeClass('dev-active');	

			$(this).addClass('dev-active');
			$('.li-mobile').removeClass('dev-active');
			$('.li-desktop').removeClass('dev-active');	
		});
	});
	$(function($) {
		$(document).on("click",'.li-desktop', function(){		
			$('.device__body_mobile').removeClass('dev-active');
			$('.device__body_tablet').removeClass('dev-active');
			$('.device__body_desktop').addClass('dev-active');	

			$(this).addClass('dev-active');
			$('.li-tablet').removeClass('dev-active');
			$('.li-mobile').removeClass('dev-active');	
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


 var controller = new ScrollMagic.Controller();
  /* 
  * Intro Section 
  * Animations 
  */


  var publish4 = $('.about-us-container');

	  if (publish4) {
	    new ScrollMagic.Scene({
	      triggerElement: '.about-us-container',
	      triggerHook: 'onCenter',
	      duration: 500,
	      offset: -100
	    }).setTween(TweenMax.from('.about-us-container .about-us', 1, {
	      top: '100'
	    })).addTo(controller);
	    /* Particles */

	    var publishParams4 = {
	      triggerElement: '.about-us-container',
	      triggerHook: 'onCenter',
	      duration: publish4.offsetHeight
	    };
	    new ScrollMagic.Scene(publishParams4).setTween(TweenMax.from('.about-us-container .particles .layer--1  img', 1, {
	      x: -10,
	      y: '-10',
	      ease: Linear.easeIn
	    })).addTo(controller);
	  }


	  $('.viads-carousel-slider').slick({
	  infinite: true,
	  slidesToShow: 5,
	  slidesToScroll: 1,
	  dots:false,
	  arrows:true,
	  responsive: [
	   {
	      breakpoint: 1300,
	      settings: {
	        slidesToShow: 4,
	        slidesToScroll: 1,
	      }
	    },
	  	{
	      breakpoint: 1200,
	      settings: {
	        slidesToShow: 3,
	        slidesToScroll: 1,
	      }
	    },
	    {
	      breakpoint: 992,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 1,
	      }
	    },
	    {
	      breakpoint: 490,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1
	      }
	    }
	  ]
	});

	$('.news-carousel').slick({
	  infinite: true,
	  slidesToShow: 3,
	  slidesToScroll: 1,
	  dots:true,
	  responsive: [
	    {
	      breakpoint: 992,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 1,
	      }
	    },
	    {
	      breakpoint: 576,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1
	      }
	    }
	  ]
	});    


	var publish3 = $('.content-container--1');

	  if (publish3) {
	    new ScrollMagic.Scene({
	      triggerElement: '.content-container--1',
	      triggerHook: 'onCenter',
	      duration: 500,
	      offset: -100
	    }).setTween(TweenMax.from('.content-container--1 .content__heading', 1, {
	      top: '100'
	    })).addTo(controller);
	    /* Particles */

	    var publishParams3 = {
	      triggerElement: '.content-container--1',
	      triggerHook: 'onBottom',
	      duration: publish3.offsetHeight
	    };
	    new ScrollMagic.Scene(publishParams3).setTween(TweenMax.from('.content-container--1 .particles .layer--1  img', 1, {
	      x: -20,
	      y: '-20',
	      ease: Linear.easeIn
	    })).addTo(controller);
	    new ScrollMagic.Scene(publishParams3).setTween(TweenMax.from('.content-container--1 .particles .layer--1  img', 1, {
	      x: 20,
	      y: '-20',
	      ease: Linear.easeIn
	    })).addTo(controller);
	  }

});



