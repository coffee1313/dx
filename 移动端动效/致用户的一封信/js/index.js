/**
 * Created by QiaoYawei on 2016/8/20.
 */
$(function(){
    if(window.location.href.split('#').length>1){
        window.location.href = window.location.href.split('#')[0];
    }
    $('body').show();
    $('#fullpage').fullpage({
        anchors: ['page1', 'page2', 'page3', 'page4', 'page5', 'page6', 'page7', 'page8'],
        afterLoad: function(anchorLink, index){
            if(index == 1) {
                $('.section1 *').show();
                $('.one_title').addClass('bounceInDown');
                $('.one_stage').addClass('fadeInUp');
                $('.one_code1').addClass('slideInLeft');
                $('.one_code2').addClass('slideInLeft');
                $('.one_code3').addClass('slideInLeft');
            }else if(index == 2) {
                $('.section2 *').show();
            }
            else if(index == 3) {
                $('.section3 *').show();
                $('.three_title').addClass('bounceInLeft');
                $('.three_center').addClass('bounceIn');
                $('.three_ox').addClass('bounceInUp');

            }else if(index == 4) {
                $('.section4 *').show();
                $('.four_title').addClass('bounceInLeft');
                $('.four_floor1').addClass('fadeInUp');
                $('.four_plane1').addClass('fadeInUp');
                $('.four_floor2').addClass('fadeInUp');
                $('.four_plane2').addClass('fadeInUp');
                $('.four_floor3').addClass('fadeInUp');
                $('.four_plane3').addClass('fadeInUp');
                $('.four_floor4').addClass('fadeInUp');
                $('.four_plane4').addClass('fadeInUp');
                $('.four_floor5').addClass('fadeInUp');
            }else if(index == 5) {
                $('.section5 *').show();
                $('.five_title').addClass('bounceInDown');
                $('.five_page').addClass('fadeInUp');
                $('.five_ox').addClass('bounceIn');
                $('.five_step1').addClass('fadeInLeft');
                $('.five_step2').addClass('fadeInLeft');
                $('.five_step3').addClass('fadeInLeft');
                $('.five_step4').addClass('fadeInRight');
                $('.five_step5').addClass('fadeInRight');
                $('.five_flag').addClass('bounce');
            }else if(index == 6) {
                $('.section6 *').show();
                $('.six_title').addClass('slideInLeft');
                $('.six_blue_ox').addClass('fadeInLeft');
                $('.six_red_ox').addClass('fadeInRight');
                $('.six_ggz').addClass('fadeInLeft');
                $('.six_mtz').addClass('fadeInRight');
                $('.six_left_zi').addClass('fadeInLeft');
                $('.six_right_zi').addClass('fadeInRight');
                $('.six_btn_blue').addClass('bounceInLeft');
                $('.six_btn_red').addClass('bounceInRight');

            }else if(index == 7) {
                $('.section7 *').show();
                $('.seven_title').addClass('bounceInDown');
                $('.input_group').addClass('fadeInLeftBig');

            }else if(index == 8) {
                $('.section8 *').show();
                $('.eight_title').addClass('bounceInDown');
                $('.input_group').addClass('fadeInLeftBig');
            }

        },
        onLeave:function(index,nextIndex,direction){
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
            }
        }
    });
    $('.form_submit').click(function(){
        $('.shade_box').show().click(function(){
            $('.shade_box').hide();
        });
    });
    $('.six_btn_blue').click(function(){
        $.fn.fullpage.moveTo(7);
    });
    $('.six_btn_red').click(function(){
        $.fn.fullpage.moveTo(8);

    });
});
