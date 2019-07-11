$(function  () {
	// 2015-7-14 start
	$(".y_yes").hover(function(){
		var index=$(this).index(".y_yes");
		$($(".y_yes .nav_son")[index]).slideDown(150);
		
	},function(){
		$(".y_yes .nav_son").slideUp(150);
		
	});
	$(".nav_box").hover(function(){
      $(".w_second_bg").slideDown(100);
	},function(){
      $(".w_second_bg").slideUp(200);
	})
	// 2015-7-14 end
	$(".w_more").click(function(){
       $(".w_hidden_a").show();
       $(".w_more").hide();
       $(".w_more_other").show();
	});
	$(".w_more_other").click(function(){
       $(".w_hidden_a").hide();
       $(".w_more").show();
       $(".w_more_other").hide();
	});

	//S 2016-2-4
	$(".header_right li").hover(function(){
		var index=$(this).index(".header_right li");
		if(index==0){
        	$($(".header_right li")[0]).css({background:"url(images/index/icon2.png) no-repeat left center"});
        }else{
        	$($(".header_right li")[1]).css({background:"url(images/index/icon1.png) no-repeat left center"});
        }
        $(".header_right li").eq(index).find("p").show();
        
	},function(){
        $(".header_right li p").hide();
        $($(".header_right li")[0]).css({background:"url(images/index/inicon2.png) no-repeat left center"});
        $($(".header_right li")[1]).css({background:"url(images/index/inicon1.png) no-repeat left center"});
	});
	//E 2016-2-4
})
