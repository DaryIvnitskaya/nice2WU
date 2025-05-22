forcesliding = false;

/**
 * jQuery.browser.mobile (http://detectmobilebrowser.com/)
 *
 * jQuery.browser.mobile will be true if the browser is a mobile device
 *
 **/
(function(a){(jQuery.browser=jQuery.browser||{}).mobile=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))})(navigator.userAgent||navigator.vendor||window.opera);

(function ( $ ) {
    $.fn.superfit = function( options ) {
        var settings = $.extend({
            wrapper: ".sf-wrap"
        }, options );
        var $objin = this;
        // on resize
        
        $(window).resize(function(evt) {
        var $window = $(window);
        //var $window = $('body');
    var width = $window.width();
    var height = $window.height();
    if (width<1024) width=1024;
        console.log('w = '+width+', h = '+height);
        var scale = Math.max(width/1920, height/1000); 0.87
        var headerscale = width/1280;
        $objin.css({'-webkit-transform': 'scale(' + scale + ') translate(-50%, -50%)',
        '-ms-transform': 'scale(' + scale + ') translate(-50%, -50%)','transform': 'scale(' + scale + ') translate(-50%, -50%)'});
        $('.fp-slidesNav').each(function() {
            $(this).css('top', '');
            var $section = $(this).closest(".section");
            var $fixtcover = $section.find(".b-fixtsize__cover");
            var $heading = $fixtcover.find(".slide__title");
            var $newnavtop = parseInt($heading.height())+((parseInt($heading.css('top'))+10)*scale)+(parseInt($section.height())-parseInt($fixtcover.height())*scale)*scale;
            $newnavtop = parseInt($heading.css('top'))*scale - (parseInt($fixtcover.height()*scale)-parseInt($section.height()))/2 + parseInt($heading.height())*scale + 7*scale;
            //var $fpsltop = parseInt($( this ).css('top')); x = (Y-(a-A)/2) + s + f
            console.log((parseInt($section.height())-parseInt($fixtcover.height())*scale)+' + '+parseInt($heading.height())+' + '+parseInt($heading.css('top'))+' + 10 * '+scale+' = '+$newnavtop);
            $( this ).css({'-webkit-transform': 'scale(' + scale + ')','top':+$newnavtop+'px'});
        });
        if (headerscale<=1) {
            $('#pageheader').css({'-webkit-transform': 'scale(' + headerscale + ')','-webkit-transform-origin':'top left'});
            $('#pagebottom').css({'-webkit-transform': 'scale(' + headerscale + ')','-webkit-transform-origin':'top left'});
        } else {
            $('#pageheader').css({'-webkit-transform': '','-webkit-transform-origin':''});
            $('#pagebottom').css({'-webkit-transform': '','-webkit-transform-origin':''});
        }
        });
        var $window = $(window);
        //var $window = $('body');
    var width = $window.width();
    var height = $window.height();
    if (window.innerHeight > window.innerWidth) { 
         $('html').addClass('html-portrait-disable');
    } else {
        $('html').removeClass('html-portrait-disable');
    }
    if (width<1024) width=1024;
        console.log('w = '+width+', h = '+height);
        var scale = Math.max(width/1920, height/1000);
        var headerscale = width/1280;
        // Greenify the collection based on the settings variable.
        $('.fp-slidesNav').each(function() {
            $(this).css('top', '');
            var $section = $(this).closest(".section");
            var $fixtcover = $section.find(".b-fixtsize__cover");
            var $heading = $fixtcover.find(".slide__title");
            var $newnavtop = parseInt($heading.height())+((parseInt($heading.css('top'))+10)*scale)+(parseInt($section.height())-parseInt($fixtcover.height())*scale)*scale;
            $newnavtop = parseInt($heading.css('top'))*scale - (parseInt($fixtcover.height()*scale)-parseInt($section.height()))/2 + parseInt($heading.height())*scale + 7*scale;
            //var $fpsltop = parseInt($( this ).css('top'));
            console.log((parseInt($section.height())-parseInt($fixtcover.height())*scale)+' + '+parseInt($heading.height())+' + '+parseInt($heading.css('top'))+' + 10 * '+scale+' = '+$newnavtop);
            $( this ).css({'-webkit-transform': 'scale(' + scale + ')','top':+$newnavtop+'px'});
        });
        if (headerscale<=1) {
            $('#pageheader').css({'-webkit-transform': 'scale(' + headerscale + ')','-webkit-transform-origin':'top left'});
            $('#pagebottom').css({'-webkit-transform': 'scale(' + headerscale + ')','-webkit-transform-origin':'top left'});
        } else {
            $('#pageheader').css({'-webkit-transform': '','-webkit-transform-origin':''});
            $('#pagebottom').css({'-webkit-transform': '','-webkit-transform-origin':''});
        }
        return this.css({'-webkit-transform': 'scale(' + scale + ') translate(-50%, -50%)',
        '-ms-transform': 'scale(' + scale + ') translate(-50%, -50%)','transform': 'scale(' + scale + ') translate(-50%, -50%)'});
        
    };
}( jQuery ));



(function($) {
    $.fn.removeClassWild = function(mask) {
        return this.removeClass(function(index, cls) {
            var re = mask.replace(/\*/g, '\\S+');
            return (cls.match(new RegExp('\\b' + re + '', 'g')) || []).join(' ');
        });
    };
})(jQuery);

(function($) {
    $.fn.wowClassWild = function(mask) {
        return this.addClass(function(index, cls) {
            var re = mask.replace(/\*/g, '\\S+')
            return (cls.match(new RegExp('\\b' + re + '', 'g')) || []).join(' ').replace("wow-", "").concat(' animated');
        });
    };
})(jQuery);

$(document).ready(function(){
    
    if(jQuery.browser.mobile)
    {
        console.log();
        $('.b-header').css('position','absolute');
    }
    else
    {
        console.log();
        $('.b-header').css('position','fixed');
    }
    
	$("#demosMenu").change(function(){
	  window.location.href = $(this).find("option:selected").attr("id") + '.html';
	});
	/* check header
	var scroll = $(window).scrollTop();
    if (scroll >= 250) {
        $('#pageheader').addClass("b-header--style-onlight");
    } else {
        $('#pageheader').removeClass("b-header--style-onlight");
    }
    */
    $( ".b-slider__nav__list__item__btn" ).click(function() {
    forcesliding = true;
    window.location.hash = $(this).data('href');
    $('.b-slider__nav__list__item').removeClass('slidernav-active');
					$('.b-slider__nav__list__item__btn').each(function() {
					    if (location.hash.indexOf($(this).attr('data-href')) > -1) $(this).parent().addClass('slidernav-active');
					});
    });
    $( ".sec6-popup-toggler" ).click(function() {
    $('.b-sec6C-popup-window__content').css('display','none');
    $("#sec6c_popup").fadeIn();
    $('#'+$(this).data("targetpopup")).fadeIn();
    });
    $( ".b-sec6C-popup-window__close" ).click(function() {
    $("#sec6c_popup").fadeOut();
    });
    
});
/*
$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 250) {
        $('#pageheader').addClass("b-header--style-onlight");
    } else {
        $('#pageheader').removeClass("b-header--style-onlight");
    }
});
*/
$('.b-extra-button--sec5c-tab').click(function() {
    $('.b-extra-button--sec5c-tab').removeClass('b-extra-button--sec5c-tab-active');
    $(this).addClass('b-extra-button--sec5c-tab-active');
    if ($('#sec5c_popup').css('display') == 'none') $('#sec5c_popup').fadeIn();
    $('.b-s5c-idx1').removeClass('wow'); 
    $('.b-s5c-idx1').removeClass('fadeInDownBig');
    $('.b-s5c-idx1').removeClass('animated');
    if ($(this).data('idx') == 'idx1') {
        $('.b-s5c-idx2').addClass('sec5C-disabled-layer');
        $('.b-s5c-idx3').addClass('sec5C-disabled-layer');
        $('.b-s5c-idx4').addClass('sec5C-disabled-layer');
        $('.b-s5c-idx1').removeClass('sec5C-disabled-layer');
        $('.b-sec5C-popup-window__content').css('display','none');
        $('#sec5c_popup_avia').css('display','block');
    }
    if ($(this).data('idx') == 'idx2') {
        $('.b-s5c-idx1').addClass('sec5C-disabled-layer');
        $('.b-s5c-idx3').addClass('sec5C-disabled-layer');
        $('.b-s5c-idx4').addClass('sec5C-disabled-layer');
        $('.b-s5c-idx2').removeClass('sec5C-disabled-layer');
        $('.b-sec5C-popup-window__content').css('display','none');
        $('#sec5c_popup_zhd').css('display','block');
    }
    if ($(this).data('idx') == 'idx3') {
        $('.b-s5c-idx1').addClass('sec5C-disabled-layer');
        $('.b-s5c-idx2').addClass('sec5C-disabled-layer');
        $('.b-s5c-idx4').addClass('sec5C-disabled-layer');
        $('.b-s5c-idx3').removeClass('sec5C-disabled-layer');
        $('.b-sec5C-popup-window__content').css('display','none');
        $('#sec5c_popup_auto').css('display','block');
    }
    if ($(this).data('idx') == 'idx4') {
        $('.b-s5c-idx1').addClass('sec5C-disabled-layer');
        $('.b-s5c-idx2').addClass('sec5C-disabled-layer');
        $('.b-s5c-idx3').addClass('sec5C-disabled-layer');
        $('.b-s5c-idx4').removeClass('sec5C-disabled-layer');
        $('.b-sec5C-popup-window__content').css('display','none');
        $('#sec5c_popup_water').css('display','block');
    }
});

$('.b-extra-button--sec5b-tab').click(function() {
    $('.b-extra-button--sec5b-tab').removeClass('b-extra-button--sec5b-tab-active');
    $(this).addClass('b-extra-button--sec5b-tab-active');
    $('.b-s5b-idx1').removeClass('wow'); 
    $('.b-s5b-idx1').removeClass('fadeInDownBig');
    $('.b-s5b-idx1').removeClass('animated');
    if ($(this).data('idx') == 'idx1') {
        $('.b-s5b-idx2').addClass('sec5C-disabled-layer');
        $('.b-s5b-idx3').addClass('sec5C-disabled-layer');
        $('.b-s5b-idx1').removeClass('sec5C-disabled-layer');
    }
    if ($(this).data('idx') == 'idx2') {
        $('.b-s5b-idx1').addClass('sec5C-disabled-layer');
        $('.b-s5b-idx3').addClass('sec5C-disabled-layer');
        $('.b-s5b-idx2').removeClass('sec5C-disabled-layer');
    }
    if ($(this).data('idx') == 'idx3') {
        $('.b-s5b-idx1').addClass('sec5C-disabled-layer');
        $('.b-s5b-idx2').addClass('sec5C-disabled-layer');
        $('.b-s5b-idx3').removeClass('sec5C-disabled-layer');
    }
});

$('.b-sec5C-popup-window__close').click(function() {
    //$('.b-extra-button--sec5c-tab').removeClass('b-extra-button--sec5c-tab-active');
    $('#sec5c_popup').fadeOut();
});

$('#b-sec8a-popupbtn').click(function() {
    $('#b-sec8A-popup').fadeIn();
});
$('.b-sec8A-popup-window__close').click(function() {
    $('#b-sec8A-popup').fadeOut();
});

$('.b-extra-button--sec8b').click(function() {
    $('.b-extra-button--sec8b').removeClass('b-extra-button--sec8b-active');
    $('.b-sec8B-popup-window__content').css('display','none');
    $('#'+$(this).data('target')).css('display','block');
    $('#b-sec8B-popup').fadeIn();
    $(this).addClass('b-extra-button--sec8b-active');
});
$('.b-sec8B-popup-window__close').click(function() {
    $('.b-extra-button--sec8b').removeClass('b-extra-button--sec8b-active');
    $('#b-sec8B-popup').fadeOut();
});

$('.b-extra-button--sec8c').click(function() {
    $('.b-extra-button--sec8c').removeClass('b-extra-button--sec8b-active');
    $('.b-sec8C-popup-window__content').css('display','none');
    $('#'+$(this).data('target')).css('display','block');
    $('#b-sec8C-popup').fadeIn();
    $(this).addClass('b-extra-button--sec8b-active');
});
$('.b-sec8C-popup-window__close').click(function() {
    $('.b-extra-button--sec8c').removeClass('b-extra-button--sec8b-active');
    $('#b-sec8C-popup').fadeOut();
});

$('.b-extra-button--sec8d').click(function() {
    $('.b-extra-button--sec8d').removeClass('b-extra-button--sec8b-active');
    $('.b-sec8D-popup-window__content').css('display','none');
    $('#'+$(this).data('target')).css('display','block');
    $('#b-sec8D-popup').fadeIn();
    $(this).addClass('b-extra-button--sec8b-active');
});
$('.b-sec8D-popup-window__close').click(function() {
    $('.b-extra-button--sec8d').removeClass('b-extra-button--sec8b-active');
    $('#b-sec8D-popup').fadeOut();
});

$('.b-extra-button--sec8e').click(function() {
    $('.b-extra-button--sec8e').removeClass('b-extra-button--sec8b-active');
    $('.b-sec8E-popup-window__content').css('display','none');
    $('#'+$(this).data('target')).css('display','block');
    $('#b-sec8E-popup').fadeIn();
    $(this).addClass('b-extra-button--sec8b-active');
});
$('.b-sec8E-popup-window__close').click(function() {
    $('.b-extra-button--sec8e').removeClass('b-extra-button--sec8b-active');
    $('#b-sec8E-popup').fadeOut();
});
$('.sec6E-tabsnav').click(function() {
    $('.b-sec6E-tabscontent').css('display','none');
    $('.'+$(this).data('target')).css('display','block');
    $('.b-sec6E-tabs-corner').css('left',$(this).data('leftoffset')+'px');
    //if ($('#sec5c_popup').css('display') == 'none') $('#sec5c_popup').fadeIn();
});

$('body').on('click', '.b-sec9-popup__slick__item__close', function() {
    $(this).parent().parent().parent().parent().parent().parent().css('opacity','0');
});

$('body').on('click', '.b-sec9-nav__slick9A .slick-slide', function() {
    $(this).parent().parent().parent().parent().parent().children(".b-sec9-popup").css('opacity','1');
});

$('.b-sec9-popup__slick9A').on('afterChange', function(event, slick, currentSlide, nextSlide){
  //console.log(nextSlide);
  $(this).parent().parent().children(".b-sec9-popup").css('opacity','1');
});

$('body').on('click', '.b-sec9-nav__slick9B .slick-slide', function() {
    $(this).parent().parent().parent().parent().parent().children(".b-sec9-popup").css('opacity','1');
});

$('.b-sec9-popup__slick9B').on('afterChange', function(event, slick, currentSlide, nextSlide){
  //console.log(nextSlide);
  $(this).parent().parent().children(".b-sec9-popup").css('opacity','1');
});

$('body').on('click', '.b-sec9-nav__slick9C .slick-slide', function() {
    $(this).parent().parent().parent().parent().parent().children(".b-sec9-popup").css('opacity','1');
});

$('.b-sec9-popup__slick9C').on('afterChange', function(event, slick, currentSlide, nextSlide){
  //console.log(nextSlide);
  $(this).parent().parent().children(".b-sec9-popup").css('opacity','1');
});

$('body').on('click', '.b-sec9-nav__slick9D .slick-slide', function() {
    $(this).parent().parent().parent().parent().parent().children(".b-sec9-popup").css('opacity','1');
});

$('.b-sec9-popup__slick9D').on('afterChange', function(event, slick, currentSlide, nextSlide){
  //console.log(nextSlide);
  $(this).parent().parent().children(".b-sec9-popup").css('opacity','1');
});

$('body').on('click', '.b-sec9-nav__slick9E .slick-slide', function() {
    $(this).parent().parent().parent().parent().parent().children(".b-sec9-popup").css('opacity','1');
});

$('.b-sec9-popup__slick9E').on('afterChange', function(event, slick, currentSlide, nextSlide){
  //console.log(nextSlide);
  $(this).parent().parent().children(".b-sec9-popup").css('opacity','1');
});

$(window).resize(function() {
$(".portrait-mode-info").css('height',$(window).height()+'px');
$(".portrait-mode-info").css('width',$(window).width()+'px');
//alert($(".portrait-mode-info").css('width'));
});
/*
$(window).resize(function() {

if ($(window).height() > 300) $('.section').css('min-height', $(window).height()); else $('.section').css('min-height', '300px');

});
var $root = $('html, body');
$('.anchor-link').click(function() {
    var href = $.attr(this, 'href');
    $root.animate({
        scrollTop: $(href).offset().top
    }, 500, function () {
        window.location.hash = href;
    });
    return false;
});



var isTouchDevice = navigator.userAgent.match(/(iPhone|iPod|iPad|Android|playbook|silk|BlackBerry|BB10|Windows Phone|Tizen|Bada|webOS|IEMobile|Opera Mini)/);
var isTouch = (('ontouchstart' in window) || (navigator.msMaxTouchPoints > 0) || (navigator.maxTouchPoints));

function setUrlHash(url){
                //Mobile Chrome doesn't work the normal way, so... lets use HTML5 for phones :)
                if(isTouchDevice || isTouch){
                    //window.history.replaceState(undefined, undefined, '#' + url);
                }else{
                    var baseUrl = window.location.href.split('#')[0];
                    //window.location.replace( baseUrl + '#' + url );
                    if(history.pushState) {
                        window.history.pushState(null, null, '#'+url);
                    }
                    else {
                        window.location.hash = '#'+url;
                    }
                }
        }

$(document).on('scroll',function(e){
    $('.section').each(function(){
        if (
           $(this).offset().top < window.pageYOffset + 10
//begins before top
        && $(this).offset().top + $(this).height() > window.pageYOffset + 10
//but ends in visible area
//+ 10 allows you to change hash before it hits the top border
        ) {
            setUrlHash($(this).attr('id'));
        }
    });
    
    
});

*/