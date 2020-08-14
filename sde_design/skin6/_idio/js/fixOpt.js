$(window).scroll(function(){
	
	if($(document).scrollTop() > 1000) {
		$('.fixOpt').addClass('fixed');
	} else {
		$('.fixOpt').removeClass('fixed');
	}

	if(($(document).height() - $(document).scrollTop()) < 1500) {
		$('.fixOpt').hide();
	} else {
		$('.fixOpt').show();
	}	
	
});

$('.fixOpt_btn').click(function() {
  $(this).toggleClass('closed');
  $('.fixOpt_cont').toggleClass('opened');
});