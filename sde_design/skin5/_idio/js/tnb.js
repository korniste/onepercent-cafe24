$(document).ready(function(){
	var $imgs = $(".fader").find("li"),
		i = 0;

	function changeImage() {
		var next = (++i % $imgs.length);
		$($imgs.get(next - 1)).fadeOut(500);
		$($imgs.get(next)).fadeIn(500);
	}
	
	var interval = setInterval(changeImage, 3000);
});



