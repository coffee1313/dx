$(function  () {
    $(window).resize(function(){
       $(".c_popularize_window").css({left:($(window).width()-369)/2+"px",top:($(window).height()-241)/2+"px"});
    });
    $(window).resize();
     //关闭弹窗
    $(".c_close_btn").click(function(){
      $(".c_popularize_window").hide();
      setTime();
    });
    $(".c_popularize_a").click(function(){
      $(".c_popularize_window").show();
    });
    // S 自主研发
    $(".c_popularize10_ul").css({width:324*$(".c_popularize10_ul li").length});
      $(".c_next").click(function(){
        var partner=$(".c_popularize10_ul");
        if (!(partner.is(":animated"))){
          if(partner.position().left<=-324*(partner.find("li").length-4)){
             }else{
           	partner.animate({left:partner.position().left-438+"px"},300);
  			  };
        };
         
       });
      $(".c_pre").click(function(){
			var partner=$(".c_popularize10_ul");
      if (!(partner.is(":animated"))){
  			if(partner.position().left>=0){
  				}else{
  					partner.animate({left:partner.position().left+210+"px"},300);
  			};
      };	
	  });
  //S 右侧
  $(".Wei_box").hover(function(){
      $(".w_san_ma").show();
  },function(){
       $(".w_san_ma").hide();
  });
  $(".wei_xin").click(function(){
    $(this).find("img").attr({src:"images/index/yicons_06.png"});
    $(".wei_bo").find("img").attr({src:"images/index/yicons_03.png"});
    $(this).css({background:"#9d1874"});
    $(".wei_bo").css({background:"#fff"});
    $(this).find("b").css({color:"#fff"});
    $(".wei_bo").find("b").css({color:"#666"});
    $(".w_img_pic").hide();
    $($(".w_img_pic")[0]).show();
  });
  $(".wei_bo").click(function(){
    $(this).find("img").attr({src:"images/index/yicon_03.png"});
    $(".wei_xin").find("img").attr({src:"images/index/yicon_06.png"});
    $(this).css({background:"#9d1874"});
    $(".wei_xin").css({background:"#fff"});
    $(this).find("b").css({color:"#fff"});
    $(".wei_xin").find("b").css({color:"#666"});
    $(".w_img_pic").hide();
    $($(".w_img_pic")[1]).show();
  });
  //E右侧
  //S 页面动效
  $(".c_popularize_one").animate({top:0,opacity:1},1500);
  $(window).scroll(function(){
        try{
          //页面动效
          var phoneHeight=$(window).scrollTop();
          if(phoneHeight>=$(".c_popularize_one").offset().top-380){
            $(".c_popularize_dda").animate({opacity:1},1000).next(".c_popularize_ddb").delay(500).animate({opacity:1},1000).next(".c_popularize_ddc").delay(800).animate({opacity:1},1000);    
          }
          if(phoneHeight>=$(".c_popularize_one").offset().top-100){
            $(".c_popularize3_img").animate({top:0,opacity:1},1000);
          }
          if(phoneHeight>=$(".c_popularize_one").offset().top){
            $(".c_popularize3_li1").animate({opacity:1},1000).next(".c_popularize3_li2").delay(500).animate({opacity:1},1000).next(".c_popularize3_li3").delay(800).animate({opacity:1},1000).next(".c_popularize3_li4").delay(1200).animate({opacity:1},1000).next(".c_popularize3_li5").delay(1500).animate({opacity:1},1000).next(".c_popularize3_li6").delay(1800).animate({opacity:1},1000);    
          }
          if(phoneHeight>=$(".c_popularize_one").offset().top+320){
            $(".c_popularize4_li1").animate({left:0,opacity:1},1000);
            $(".c_popularize4_li2").animate({right:0,opacity:1},1000);    
          }
          if(phoneHeight>=$(".c_popularize_one").offset().top+600){
            $(".c_popularize5_img").animate({top:0,opacity:1},1000);    
          }
          if(phoneHeight>=$(".c_popularize_one").offset().top+700){
            $(".c_popularize5_li1").animate({top:0,opacity:1},1000).next(".c_popularize5_li2").delay(500).animate({top:0,opacity:1},1000).next(".c_popularize5_li3").delay(800).animate({top:0,opacity:1},1000).next(".c_popularize5_li4").delay(1200).animate({top:0,opacity:1},1000).next(".c_popularize5_li5").delay(1500).animate({top:0,opacity:1},1000);    
          }
          if(phoneHeight>=$(".c_popularize_one").offset().top+1000){
            $(".c_popularize6_img1").animate({top:0,opacity:1},1000);
            $(".c_popularize6_img2").animate({top:0,opacity:1},1200);    
          }
          if(phoneHeight>=$(".c_popularize_one").offset().top+1100){
            $(".c_popularize6_ul").animate({top:0,opacity:1},1500);
          }
          if(phoneHeight>=$(".c_popularize_one").offset().top+1600){
            $(".c_popularize7_img").animate({left:0,opacity:1},1000);
            $(".c_popularize7_p1").animate({left:0,opacity:1},1000);
            $(".c_popularize7_p2").animate({left:0,opacity:1},1000);
            $(".c_popularize7_p3").animate({right:0,opacity:1},1000);
          }
          if(phoneHeight>=$(".c_popularize_one").offset().top+2200){
            $(".c_popularize8_img").animate({right:0,opacity:1},1000);
            $(".c_p_img").animate({opacity:1},3000);
            $(".c_popularize8_li1").animate({top:0,opacity:1},800).next(".c_popularize8_li2").delay(500).animate({top:0,opacity:1},800).next(".c_popularize8_li3").delay(800).animate({top:0,opacity:1},800).next(".c_popularize8_li4").delay(1200).animate({top:0,opacity:1},800).next(".c_popularize8_li5").delay(1500).animate({top:0,opacity:1},800);    
          }
          if(phoneHeight>=$(".c_popularize_one").offset().top+3000){
            $(".c_popularize9_img").animate({top:0,opacity:1},1000);
            $(".c_popularize9_li1").animate({left:0,opacity:1},800).next(".c_popularize9_li2").delay(500).animate({left:0,opacity:1},800).next(".c_popularize9_li3").delay(800).animate({left:0,opacity:1},800);
            $(".c_popularize_aone").animate({opacity:1},3000);  
          }
          if(phoneHeight>=$(".c_popularize_one").offset().top+3800){
            $(".c_popularize10_img").animate({right:0,opacity:1},1000);
            $(".c_popularize10_p1").animate({right:0,opacity:1},1000);
            $(".c_popularize10_p2").animate({right:0,opacity:1},1000);
            $(".c_popularize10_p3").animate({right:0,opacity:1},1000);
            $(".c_popularize_atwo").animate({right:0,opacity:1},1000);
            $(".c_popularize10_outbox").animate({left:0,opacity:1},1000);  
          }
        }
          catch(e){}
        });
    $(window).scroll();
  //E 页面动效


    //弹窗定时出现
    setTime();
    function setTime(){
       setTimeout(function(){
           $(".c_popularize_window").css({display:"block"});
        },10000)
    }
    
});
