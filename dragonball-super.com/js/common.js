// JavaScript Document


// N A V

$(function(){
    /*const video = $('.trailerMV').get(0);*/
    
	$('#nav, .menu-wrap a').click(function(){
        $('#nav div').toggleClass("active");
        $('.menu-nav').toggle('fade', { easing: 'easeInOutCubic' }, 400 );
        $('.menu-wrap').toggleClass("active");
        
        /*
        if (video.paused) {
            video.play();
        } else {
            video.pause();
        }
        */
    });
});



// PAGE 遷移

jQuery.event.add(window,"load",function() {

    // page transition
    
    $(function() {
        $('a:not([href^="#"]):not([target]):not(.md-TR):not(.md-MV)').on('click', function(e){
        e.preventDefault();
        var url = $(this).attr('href');

        if (url !== '') {
        $('.FDwrap').removeClass('WRtppg');
        $('body').addClass('bd_fade');
        setTimeout(function() { window.location = url; }, 600); // 秒後に取得したURLに遷移
        }
        return false;
        });
    });
});



// header menu

var startPos = 0, winScrollTop = 0;

$(window).on('scroll', function () {
    winScrollTop = $(this).scrollTop();

    if (window.matchMedia('(min-width:851px)').matches) {
    
        if (winScrollTop >= startPos) {
            if (winScrollTop >= 50) {
                $('header, #navBT, .hd-logo span').addClass('scrl');
            }
        } else {
            $('header, #navBT, .hd-logo span').removeClass('scrl');
        }
        startPos = winScrollTop;
        
    } else if (window.matchMedia('(max-width: 850px)').matches) {
        $('header, #navBT, .hd-logo span').removeClass('scrl');
    }
});


