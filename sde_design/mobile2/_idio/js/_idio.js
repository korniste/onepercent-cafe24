$(document).ready(function(){

	function setLoad(){
		var keySlit;
		var keyElementSlit;
		var elementSelector;
		var classSlit;
		var listNum = new Object();
		
		$.each(IDIO, function(key, value){

			keySlit = null;
			keyElementSlit = null;
			elementSelector = null;
			classSlit = null;

			keySplit = key.split('-');
			keyElementSlit = key.split('-');
			keyElementSlit.splice(0, 1);
			elementKey = keyElementSlit.join("-");
			
			if(keySplit[0]=='text'){
				if($('#'+elementKey).length > 0){
					elementSelector = '#';
				}else{
					if($('.'+elementKey).length > 0){
						elementSelector = '.';
					}
				}
//				console.info($(elementSelector+elementKey))
				$(elementSelector+elementKey).text(value);
			}

			if(keySplit[0]=='class'){
				if($('#'+elementKey).length > 0){
					elementSelector = '#';
				}else{
					if($('.'+elementKey).length > 0){
						elementSelector = '.';
					}
				}
				classSlit = value.split(',');
				$.each(classSlit, function(idx, classItem){
					classItem = classItem.trim();
					if(!$(elementSelector+elementKey).hasClass(classItem)){
						$(elementSelector+elementKey).addClass(classItem);
					}
				});
			}

			if(keySplit[0]=='href'){
				if($('#'+elementKey).length > 0){
					elementSelector = '#';
				}else{
					if($('.'+elementKey).length > 0){
						elementSelector = '.';
					}
				}
				$(elementSelector+elementKey).attr('href', value);
			}
			
		});
	}
	setLoad();	

});


var IDIO = {};


$(document).ready(function(){
	$(".on").show();
	$(".off").remove();
});


$(window).on('load',function(){
	animateInView();
});


$(window).scroll(function() {
	animateInView();
});


function animateInView(){
	var scrolledAmount = $(window).scrollTop(),
	bottomOfWindow = scrolledAmount + $(window).height();

	$('.fadeIn').each(function () {
		var cardTop = $(this).offset().top;

		if(cardTop <= bottomOfWindow ){
			$(this).addClass('animate');
		}
	});

	$('.fadeInUp').each(function () {
		var cardTop = $(this).offset().top;

		if(cardTop <= bottomOfWindow ){
			$(this).addClass('animate');
		}
	});

	$('.fadeInDown').each(function () {
		var cardTop = $(this).offset().top;

		if(cardTop <= bottomOfWindow ){
			$(this).addClass('animate');
		}
	});

	$('.fadeInRight').each(function () {
		var cardTop = $(this).offset().top;

		if(cardTop <= bottomOfWindow ){
			$(this).addClass('animate');
		}
	});

	$('.fadeInLeft').each(function () {
		var cardTop = $(this).offset().top;

		if(cardTop <= bottomOfWindow ){
			$(this).addClass('animate');
		}
	});
	
};