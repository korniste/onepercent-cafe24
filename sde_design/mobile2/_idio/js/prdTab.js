$('.prdTab-slider').slick({
	dots: true,
	infinite: true,
	speed: 500,
	fade: true,
	arrows: false,
	cssEase: 'linear',
	appendDots: $('.prdTab-indicators'),
    customPaging: function customPaging(slider, i) {
        return '<span class="prdTab-tit-' + (i + 1) + '"></span>';
    }
});