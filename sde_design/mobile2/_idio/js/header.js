$(document).scroll(function(){
	var _stop = 39;
	if ($("#topBnr").hasClass("opened")) _stop = $("#topBnr").height() + 39;
	if ($(this).scrollTop() >= _stop) {
		$('.headerWrap').addClass('headerWrap-fixed');
		$("#contents").css("padding-top",$(".headerWrap").height());
	} else {
		$('.headerWrap').removeClass('headerWrap-fixed');
		$("#contents").css("padding-top","");
	}	
});


$(function() {
	$('.menu_btn').click(function() {
		if (!$('.btn_wrapper').hasClass('clicked')) {
			$('.nav').addClass('opened');
			$('.nav_cover').stop(true).fadeIn(200);
		} else {
			$('.nav').removeClass('opened');
			$('.nav_cover').stop(true).fadeOut(200);
		}
	});
	$('.nav_cover').click(function() {
		$('.nav').removeClass('opened');
		$('.nav_cover').stop(true).fadeOut(200);
	});
});


/* 검색 */
$('.btn_sch').click(function() {
	$('.schArea').stop().fadeToggle(100);
});
$('.sch_close').click(function() {
	$('.schArea').stop().fadeToggle(100);
});
$('.sch_cover').click(function() {
	$('.schArea').stop().fadeToggle(100);
});