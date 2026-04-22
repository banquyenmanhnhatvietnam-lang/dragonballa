// twitter JS delay

// modaal

$('.md-MV').modaal({
    animation_speed: 150,
    background: "#000",
    overlay_opacity: 0.85,
	type: 'video',
    
    /*after_open: function() {
        const video = $('.trailerMV').get(0);
        video.pause();
    },
    after_close: function() {
        const video = $('.trailerMV').get(0);
        video.play();
    },*/
});

     
            
// ScrollTrigger

gsap.registerPlugin(ScrollTrigger);

gsap.to(".hd-logo, .tbt1", {
    scrollTrigger: { toggleActions: "play pause resume reverse",  trigger: "#contents", start: "top 25%", end: "bottom 0%",
    toggleClass: { targets: ".hd-logo, .tbt1", className: "appr", }, /*markers: true*/ },
});

gsap.to(".tbt2", {
    scrollTrigger: { toggleActions: "play pause resume reverse",  trigger: ".cont-wrap2", start: "50% 50%", end: "bottom 0%",
    toggleClass: { targets: ".tbt2", className: "appr", }, /*markers: true*/ },
});

gsap.utils.toArray(".moreBT, .intro-main").forEach(target => {
gsap.from(target, { scrollTrigger: { trigger: target, start: "top 88%", toggleClass: { targets: target, className: "appr" }, once: true }, });});
        
gsap.from (".news-item section", { scrollTrigger: { trigger: ".newsTP", start: "top 88%", },
opacity: 0, x: 50, duration: 1.5, delay: 0.2, ease: "power3.out", stagger: { each: 0.15 }});

gsap.from (".intro-txt p", { scrollTrigger: { trigger: ".intro-txt", start: "top 88%", },
opacity: 0, y: 50, duration: 2.0, ease: "power3.out", stagger: { each: 0.3 }});


// ---- BG
