/* 서랍기능 */
$('#menu .arr').live("click", function(e){

	//$('#menu .d2Box').slideUp('normal');

	if($(this).parent().hasClass("d1")) {
		$('#menu .d2Box').slideUp(200);
	  	$('#menu .d1 .open').removeClass('open-selected');
        $('#menu .d1').removeClass('open-li');
	}else if($(this).parent().hasClass("d2")) {
		$('#menu .d3Box').slideUp(200);	
	  	$('#menu .d2 .open').removeClass('open-selected');
        $('#menu .d2').removeClass('open-li');
	}else if($(this).parent().hasClass("d3")) {
		$('#menu .d4Box').slideUp(200);
	  	$('#menu .d3 .open').removeClass('open-selected');
        $('#menu .d3').removeClass('open-li');
	}

	if($(this).siblings('.open').next().is(':hidden') == true) {
		$(this).siblings('.open').addClass('open-selected');
        $(this).parent('li').addClass('open-li');
		$(this).siblings('.open').next().slideDown(200);
	 } 

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
                    $d1.find('.d2Box').append('<li class="d2" data-param="'+key.param+'"><a href="/product/list.html'+key.param+'">'+key.name+'</a></li>');
                    return;
                }                
                if ($d2.length > 0) {
                    if ($d2.hasClass('pre') === false) {
                        $d2.addClass('pre');
                        $d2.append('<ul class="d3Box"></ul>');
						
                    }

                    $d2.find('.d3Box').append('<li class="d3" data-param="'+key.param+'"><a href="/product/list.html'+key.param+'">'+key.name+'</a></li>');
                    return;
                }
            }); 
			$("div#menu .pre").each(function(k,v) { 
				$(this).children("a").addClass("open").parent('li').append("<a class='arr'><i class='fas fa-chevron-down'></i><i class='fas fa-chevron-up'></i></a>");
			});
            //setCategory();

        }
    });

});