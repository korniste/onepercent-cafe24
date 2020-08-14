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