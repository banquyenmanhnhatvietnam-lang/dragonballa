// JavaScript Document

window.onpageshow = function () {

    $('body').removeClass('bd_fade'); 
    $('header, .Lside').addClass('appr');

    gsap.from (".hd-menu div", { opacity: 0, y: -15, duration: 1.0, delay: 0.2, ease: "power4.out", stagger: { each: 0.15 } });
    gsap.from (".hd-sns",      { opacity: 0, x: -20, duration: 1.4, delay: 0.8, ease: "power4.out" });

    gsap.utils.toArray(".cttl, .news-main").forEach(target => {
    gsap.from(target, { scrollTrigger: { trigger: target, start: "top 88%",
    toggleClass: { targets: target, className: "appr" }, once: true }, });});

};


// height指定 contents

$(window).on('load resize', function(){

var wnH = window.innerHeight;
var ftH = $('footer').innerHeight();
var pgH = wnH - ftH;

    $('.cont-wrap2').css('min-height', pgH+'px');
    
});



