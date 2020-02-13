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


// scroll 
// init controller
var controller = new ScrollMagic.Controller();

let ele = $(".painting");
let action = gsap.timeline()
    .from(ele, { duration: 1.5, y: '70%', ease: "power3.out" })
    .set(ele, { y: '0%' })


scene = new ScrollMagic.Scene({
        triggerElement: '#trigger',
        duration: 0,
    })
    .setTween(action)
    .addTo(controller)