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


	// $(document).on("click",'.header__nav ul li a', function(){

	// 	var $burger = $('.burger-click-region');
	
	// 	$('.header__nav').removeClass('active');
	// 	$burger.removeClass('active');
	//     $burger.parent().removeClass('is-open');
	
	// });

	$(document).on("click",'.destination-nav a', function(){

		// $(this).parents('.header__nav').toggleClass('align');
		$(this).toggleClass('arrow');
		$(this).next('.mega-menu').toggleClass('active');

		$('.artisan-nav a').removeClass('arrow');
		$('.artisan-nav a').next('.mega-menu').removeClass('active');

		if ($('.mega-menu').hasClass('active')) {
			$('.header__nav').addClass('align');
		} else {
			$('.header__nav').removeClass('align');
		}
	
	});

	$(document).on("click",'.artisan-nav a', function(){

		// $(this).parents('.header__nav').toggleClass('align');
		$(this).toggleClass('arrow');
		$(this).next('.mega-menu').toggleClass('active');

		$('.destination-nav a').removeClass('arrow');
		$('.destination-nav a').next('.mega-menu').removeClass('active');

		if ($('.mega-menu').hasClass('active')) {
			$('.header__nav').addClass('align');
		} else {
			$('.header__nav').removeClass('align');
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

	$(window).load(function() {
		setTimeout(function () {
		    $(".general-banner__img").addClass("transform").delay(0);
		}, 0);
	});


	$(document).on("click",'.general-form__drop_1', function(){

		$(this).next('.general-form__dropdown_1').addClass('active');
	
	});
	$(document).mouseup(function (e){ // событие клика по веб-документу
		var $drop1 = $(".general-form__drop_1"); // тут указываем ID элемента
		if (!$drop1.is(e.target) // если клик был не по нашему блоку
		    && $drop1.has(e.target).length === 0) { // и не по его дочерним элементам
			$('.general-form__dropdown_1').removeClass('active');
		}
	});

	$(document).on("click",'.general-form__drop_2', function(){

		$(this).next('.general-form__dropdown_2').addClass('active');
	
	});
	$(document).mouseup(function (e){ // событие клика по веб-документу
		var $drop2 = $(".general-form__drop_2"); // тут указываем ID элемента
		if (!$drop2.is(e.target) // если клик был не по нашему блоку
		    && $drop2.has(e.target).length === 0) { // и не по его дочерним элементам
			$('.general-form__dropdown_2').removeClass('active');
		}
	});

	$(document).on("click",'.general-form__drop_3', function(){

		$(this).next('.general-form__dropdown_3').addClass('active');
	
	});
	$(document).mouseup(function (e){ // событие клика по веб-документу
		var $drop3 = $(".general-form__drop_3,.general-form__dropdown_3"); // тут указываем ID элемента
		if (!$drop3.is(e.target) // если клик был не по нашему блоку
		    && $drop3.has(e.target).length === 0) { // и не по его дочерним элементам
			$('.general-form__dropdown_3').removeClass('active');
		}
	});

	$(document).ready(function(){

        var target = $('.about');
        var targetPos = target.offset().top + 50;
        var winHeight = $(window).height();
        var scrollToElem = targetPos - winHeight;
        $(window).scroll(function(){
          var winScrollTop = $(this).scrollTop();
          if(winScrollTop > scrollToElem){
            $('.about__images img:nth-child(2)').addClass('opacity');
            setTimeout(function(){$('.about__images img:nth-child(1)').addClass('opacity')},500); 
          }
        });

    });
});

function wcqib_refresh_quantity_increments() {
    jQuery("div.quantity:not(.buttons_added), td.quantity:not(.buttons_added)").each(function(a, b) {
        var c = jQuery(b);
        c.addClass("buttons_added"), c.children().first().before('<input type="button" value="-" class="minus" />'), c.children().last().after('<input type="button" value="+" class="plus" />')
    })
}
String.prototype.getDecimals || (String.prototype.getDecimals = function() {
    var a = this,
        b = ("" + a).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
    return b ? Math.max(0, (b[1] ? b[1].length : 0) - (b[2] ? +b[2] : 0)) : 0
}), jQuery(document).ready(function() {
    wcqib_refresh_quantity_increments()
}), jQuery(document).on("updated_wc_div", function() {
    wcqib_refresh_quantity_increments()
}), jQuery(document).on("click", ".plus, .minus", function() {
    var a = jQuery(this).closest(".quantity").find(".qty"),
        b = parseFloat(a.val()),
        c = parseFloat(a.attr("max")),
        d = parseFloat(a.attr("min")),
        e = a.attr("step");
    b && "" !== b && "NaN" !== b || (b = 0), "" !== c && "NaN" !== c || (c = ""), "" !== d && "NaN" !== d || (d = 0), "any" !== e && "" !== e && void 0 !== e && "NaN" !== parseFloat(e) || (e = 1), jQuery(this).is(".plus") ? c && b >= c ? a.val(c) : a.val((b + parseFloat(e)).toFixed(e.getDecimals())) : d && b <= d ? a.val(d) : b > 0 && a.val((b - parseFloat(e)).toFixed(e.getDecimals())), a.trigger("change")
});