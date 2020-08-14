function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) != -1) return c.substring(name.length,c.length);
    }
    return "";
} 

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
} 

function couponClose(){
    if($("input[name='chkbox']").is(":checked") ==true){
        setCookie("close","N",1);
    }
	$("#popup_idio").css("opacity","0");
	$("#popup_idio").css("z-index","-1");
}

$(document).ready(function(){
    cookiedata = document.cookie;
    if(cookiedata.indexOf("close=N")<0){
        $("#popup_idio").attr('class', 'opened')
    }else{
        $("#popup_idio").css("opacity","0");
        $("#popup_idio").css("z-index","-1");
    }
    $("#popup_btn_close").click(function(){
        couponClose();
    });
});

$('.popup-slider').slick({
	dots: true,
	infinite: true,
	speed: 500,
	autoplay: true,
	pauseOnHover: false,
	pauseOnFocus: false,
	fade: true,
	draggable: false,
	cssEase: 'linear'
});