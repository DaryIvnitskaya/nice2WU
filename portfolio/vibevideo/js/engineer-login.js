$(function($) {


	$(function() {
			  
		  $('ul.content-form-tab__head').on('click', 'li:not(.active)', function() {
		    $(this)
		      .addClass('active').siblings().removeClass('active')
		      .closest('div.content-form-tab').find('div.content-form-tab__body').removeClass('active').eq($(this).index()).addClass('active');

		  });
		  
	});

});



