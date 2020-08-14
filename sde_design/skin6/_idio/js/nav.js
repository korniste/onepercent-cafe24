$(window).scroll(function(){	

	if($(document).scrollTop() > 0) {
		$('.nav').addClass('fixed');
	} else {
		$('.nav').removeClass('fixed');
	}
	return;
	
});


/* gnb */
$(document).ready(function(){
	$('.gnb_wrap').hover(
		function() {
			$(this).addClass('opened');			
		},
		function() {
			$(this).removeClass('opened');						
		}
	)
});


/* 검색 */
$('.ic_sch').click(function() {
	$('.schArea').stop().fadeToggle(100);
});
$('.sch_close').click(function() {
	$('.schArea').stop().fadeToggle(100);
});
$('.sch_cover').click(function() {
	$('.schArea').stop().fadeToggle(100);
});


/* 카테고리 끌어오기 */
$(document).ready(function(){
	
    var $d1_wrap = $('.d1Box');
    var $d1_list = $d1_wrap.find('.d1');
    var len = $d1_list.length;

    $.ajax({
        url : '/exec/front/Product/SubCategory',
        dataType: 'json',
        success: function(aData) {
            if (aData == null || aData == 'undefined') {
                return;
            }
            $.each(aData, function(index, key) {
                var $d1 = $d1_wrap.find('.d1[data-param$="=' + key.parent_cate_no + '"]');
                var $d2 = $d1_wrap.find('.d2[data-param$="=' + key.parent_cate_no + '"]');
                var $d3 = $d1_wrap.find('.d3[data-param$="=' + key.parent_cate_no + '"]');
                if ($d1.length > 0) {
                    var _index = $d1_list.index($d1);

                    if ($d1.hasClass('pre') === false) {
                        $d1.addClass('pre');
                        $d1.append('<ul class="d2Box"></ul>');
                    }
                    $d1.find('.d2Box').append('<li class="d2" data-param="'+key.param+'"><a href="/product/list.html'+key.param+'"><span>'+key.name+'</span></a></li>');
                    return;
                }			
            });
            //setCategory();

        }
    });

});
