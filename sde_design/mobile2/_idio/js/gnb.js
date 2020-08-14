$(document).ready(function(){
	
    var $depth1_wrap = $('.depth1Box');
    var $depth1_list = $depth1_wrap.find('.depth1');
    var len = $depth1_list.length;

    $.ajax({
        url : '/exec/front/Product/SubCategory',
        dataType: 'json',
        success: function(aData) {
            if (aData == null || aData == 'undefined') {
                return;
            }
            $.each(aData, function(index, key) {
                var $depth1 = $depth1_wrap.find('.depth1[data-param$="=' + key.parent_cate_no + '"]');
            });

            setCategory();
        }
    });
});