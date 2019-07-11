$(function(){
	
	$(window).scroll(function(){
        var top1=$(".index_floor").offset().top-100;
        if($(window).scrollTop()>=top1){
            $(".left_nav").show();
            for(i=0;i<$(".index_floor").length;i++){
                var tops=$($(".index_floor")[i]).offset().top-100;
                if($(window).scrollTop()>tops&&$(window).scrollTop()<(tops+570)){
                    $($(".left_nav li")[i]).addClass("clickemyy").siblings().removeClass("clickemyy");
                }
            }       
        }else{
            $(".left_nav").hide();
        }
        if($(window).scrollTop()>200){
            $(".r-fixed").css({visibility:"visible"});
        }else{
            $(".r-fixed").css({visibility:"hidden"});
        }
    });

	$(".left_nav li").click(function(){
		var index=$(this).index(".left_nav li");
        var topss=$($(".index_floor")[index]).offset().top;
        $(document.documentElement).animate({
            scrollTop: topss
            },200);
        //支持chrome
        $(document.body).animate({
            scrollTop: topss
            },200);
	});
	
	
	$("#back").click(function(){
		$(document.documentElement).animate({
            scrollTop: 0
            },200);
        // 支持chrome
        $(document.body).animate({
            scrollTop: 0
        },200);
	});
});
