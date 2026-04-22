// JavaScript Document

window.onpageshow = function () {

    $('body').removeClass('bd_fade'); // CSS delay 1.0s
        
        setTimeout(function () {
                $('#load').addClass('fadeout');
        }, 500);
            
        setTimeout(function () {
            $('header, .tp-logo, .top-PIC, .Lside').addClass('appr');
            
            gsap.from (".hd-menu div", { opacity: 0, y: -15, duration: 1.0, delay: 0.2, ease: "power4.out", stagger: { each: 0.15 } });
            gsap.from (".hd-sns",      { opacity: 0, x: -20, duration: 1.4, delay: 0.8, ease: "power4.out" });
            
            gsap.utils.toArray(".tp-movie, .tp-txt").forEach(target => {
            gsap.from(target, { scrollTrigger: { trigger: target, start: "top 95%",
            toggleClass: { targets: target, className: "appr" }, once: true }, });});
            
            gsap.utils.toArray(".cttl").forEach(target => {
            gsap.from(target, { scrollTrigger: { trigger: target, start: "top 88%",
            toggleClass: { targets: target, className: "appr" }, once: true }, });});


        }, 1000);
        
};






