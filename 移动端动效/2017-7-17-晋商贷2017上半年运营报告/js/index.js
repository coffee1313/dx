$(function(){
	$('body').show();
	$('#menu').hide();
	$('#dowebok').fullpage({
//		continuousVertical: true,
		anchors: ['page1', 'page2', 'page3', 'page4', 'page5','page6', 'page7', 'page8', 'page9', 'page10','page11', 'page12', 'page13', 'page14', 'page15'],
		menu: '#menu',
		afterLoad: function(anchorLink, index){
			if(index == 1) {
				$('.section1 *').show();
				$('#menu').hide();
				$(".f_bancon").addClass('bounceInDown'); 
			}else if(index == 2){
				$('.section2 *').show();
				$('#menu').show();
				$(".f_juan_con").addClass('fadeInRightBig');
			}else if(index == 3){
				$('.section3 *').show();
				$('#menu').show();
				$('.f_one_list .f_three_list1').addClass('dx_list_left');
				$('.f_one_list .f_three_list2').addClass('dx_list_left');
				$('.f_one_list .f_three_list3').addClass('dx_list_right');
				$('.f_one_list .f_three_list4').addClass('dx_list_right');
				
			}else if(index == 4){
				$('.section4 *').show();
				$('#menu').show();
				$(".f_login2017_top").addClass('dx_widthout');
				$(".f_login2016_top").addClass('dx_widthout2');
			}else if(index == 5){
				$('.section5 *').show();
				$('#menu').show();
				$(".f_three_con").addClass('dx_heighttop');
			}else if(index == 6){
				$('.section6 *').show();
				$('#menu').show();
			}else if(index == 7){
				$('.section7 *').show();
				$('#menu').show();
			}else if(index == 8){
				$('.section8 *').show();
				$('#menu').show();
				 $(".f_agebox").addClass('fadeInLeftBig');
			}else if(index == 9){
				$('.section9 *').show();
				$('#menu').show();
				$(".f_map").addClass('fadein');
			    $(".f_map_top").addClass('fadeinbig');
			    $(".f_map_list").addClass('fadein');
			}else if(index == 10){
				 $('.section10 *').show();
				 $('#menu').show();
				 $(".f_fenbu").addClass('dx_roate');
				 $(".f_fenbu1").addClass('fenbu_in1');
				 $(".f_fenbu2").addClass('fenbu_in2');
				 $(".f_fenbu3").addClass('fenbu_in5');
				 $(".f_fenbu4").addClass('fenbu_in4');
				 $(".f_fenbu5").addClass('fenbu_in3');
			}else if(index == 11){
				$('.section11 *').show();
				$('#menu').show();
			}else if(index == 12){
				$('.section12 *').show();
				$('#menu').show();
				$(".f_qixianbox").addClass('fadeInLeftBig');
			    $(".f_qixian_tip").addClass('fadeInRightBig');
			    $(".f_qixiancon_tip").addClass('dx_qixian2');
			    $(".f_qixiancon").addClass('dx_qixian1');
			}else if(index == 13){
				$('.section13 *').show();
				$('#menu').show();
				$('.f_halfyear_list1').addClass('dx_bounceleft1');
				$('.f_halfyear_list2').addClass('dx_bounceleft2');
				$('.f_halfyear_list3').addClass('dx_bounceleft3');
			}else if(index == 14){
				$('.section14 *').show();
				$('#menu').show();
				 $(".f_jsdimg").addClass('fadeInLeftBig');
			}
			else if(index == 15){
				$('.section15 *').show();
				$('#menu').show();
			}
		},
		onLeave:function(index,nextIndex ,direction ){
			if(nextIndex == 1) {
                $('.section1 *').hide();
            }else if(nextIndex == 2) {
                $('.section2 *').hide();
            }else if(nextIndex == 3) {
                $('.section3 *').hide();
            }else if(nextIndex == 4) {
                $('.section4 *').hide();
            }else if(nextIndex == 5) {
                $('.section5 *').hide();
            }else if(nextIndex == 6) {
                $('.section6 *').hide();
            }else if(nextIndex == 7) {
                $('.section7 *').hide();
            }else if(nextIndex == 8) {
                $('.section8 *').hide();
            }else if(nextIndex == 9) {
                $('.section9 *').hide();
            }else if(nextIndex == 10) {
                $('.section10 *').hide();
            }else if(nextIndex == 11) {
                $('.section11 *').hide();
            }else if(nextIndex == 12) {
                $('.section12 *').hide();
            }else if(nextIndex == 13) {
                $('.section13 *').hide();
            }else if(nextIndex == 14) {
                $('.section14 *').hide();
            }else if(nextIndex == 15) {
                $('.section15 *').hide();
            }
		}
		
	});
	$(".J_backtop").click(function(){
		 $.fn.fullpage.moveTo(1);
	});
	
});