$(".painting").hover(
    function() {
        gsap.to($(this), {
            duration: 0.5,
            css: {
                scale: 1.05,
            },
            ease: "power3.out"
        });
    },

    function() {
        gsap.to($(this), {
            duration: 0.5,
            css: {
                scale: 1,
            },
            ease: "power3.out"
        });
    }
);

let ele = $(".painting");

let action = gsap.timeline()
    .from(ele, {
        duration: 2,
        opacity: 0,
        y: '70%',
        ease: "power3.out"
    })

// scroll 
// init controller
var controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
        triggerElement: '.projects',
        duration: 0,
        triggerHook: 0.5
    })
    .setTween(action)
    // .addIndicators()
    .addTo(controller);