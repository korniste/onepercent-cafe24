$(window).scroll(function(){	

	if($(document).scrollTop() > 450) {
		$('.btnTop').fadeIn(200);
	} else {
		$('.btnTop').fadeOut(200);
	}
	return;
	
});

$(function() {
	
	$('.gototop .top').click(function() {
		$('html, body').animate({scrollTop:0}, 'slow');
		return false;
	});
	$('.gototop .bottom').click(function() {
		$('html, body').animate({scrollTop:$(document).height()}, 'slow');
		return false;
	});

});