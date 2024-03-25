gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
    el: document.querySelector("body"),
    smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "body" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("body", {
    scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
        return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector("body").style.transform ? "transform" : "fixed"
});




// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();



let t =gsap.timeline()

t.from('.header a',{
    y:-50,
    duration:0.5,
    opacity:0,
    // delay:0.2
    
    stagger:0.3

})

t.from('.home-content h1',{
    y:-50,
    duration:0.2,
    opacity:0,
    stagger:0.3

})

t.from('.home-content h2',{
    y:-50,
    duration:0.2,
    opacity:0,
    stagger:0.3


})

t.from('.home-content a',{
    scale:0.1,
    duration:0.5,
    opacity:0,
    stagger:0.3

})

gsap.from('.home-rectangle',{
    x:-500,
    duration:0.5,
    opacity:0,
    stagger:0.8

})

gsap.from('.home-container   .home-perfil',{
    x:-100,
    duration:0.5,
    opacity:0,
    stagger:0.5,
    markers: true,

})

gsap.from('.services .services__card', {
    scale: 0.7,
    duration: 1,
    opacity: 0,
    scrollTrigger: {
        trigger: ".services",
        start: 'top 100%',
        scroller: 'body',
        // markers: true,
        scrub: true
    }
})

















