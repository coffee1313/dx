$(function(){
    tops();
    leftNav();
});
//±‡º≠Õ∑œÒµØ¥∞
function tops(){
    $(window).resize(function(){
        $(".c_box_bg").css({height:$("body").height()+"px"});//’⁄’÷≤„
        $(".c_newhead_portrait").css({left:($("body").width()-620)/2+"px",top:($(window).height()-436)/2+"px"});//µØ¥∞æ”÷–
    });
    $(window).resize();
    $(".c_investor_img a").hover(function(){
        $(".c_text_top").show();
        $(".c_top_bg").show();
    },function(){
        $(".c_text_top").hide();
        $(".c_top_bg").hide();
    });//°∞±‡º≠Õ∑œÒ°±œ‘ æ
    $(".c_investor_img a").click(function(){
        $(".c_box_bg").show();
        $(".c_newhead_portrait").show();
    });//œ‘ æµØ¥∞
    $(".c_close_btn").click(function(){
        $(".c_box_bg").hide();
        $(".c_newhead_portrait").hide();
    });//πÿ±’µØ¥∞
}

//◊Û≤‡µº∫Ω
function leftNav(){
    $('.J_left_nav_tit').on('click',function(){
        $('.J_out_a').removeClass('active');
    });
    $(".J_out_a").on('click',function(){
        $('.J_out_a').removeClass('active');
        $(this).addClass('active');
    });
}