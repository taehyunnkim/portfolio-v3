// // set the starting position of the cursor outside of the screen
// let clientX = -100;
// let clientY = -100;
// const innerCursor = document.querySelector(".cursor");

// const initCursor = () => {
//     // add listener to track the current mouse position
//     document.addEventListener("mousemove", e => {
//         clientX = e.clientX;
//         clientY = e.clientY;
//     });

//     const render = () => {
//         innerCursor.style.transform = `translate(${clientX}px, ${clientY}px)`;

//         requestAnimationFrame(render);
//     };

//     requestAnimationFrame(render);
// };

// initCursor();

// homepage entrance
const initHome = () => {
    console.log("loaded");
    const bg = document.getElementById("container");

    bg.addEventListener('mousemove', e => {
        parallaxIt(e, ".introLeft", 15, bg);
        parallaxIt(e, ".introRight", -8, bg);
    });

    let intro = document.querySelector(".intro");
    intro.style.opacity = "1";

    gsap.from(intro, 1, {
        opacity: 0,
        y: 50,
        ease: "power4.out"
    })
}

const overlay = document.getElementsByClassName("overlay");
const xhr = new XMLHttpRequest;
let page = undefined;

function displayProjects() {
    xhr.open('GET', "projects.html", true);
    xhr.responseType = "document";
    xhr.send();

    xhr.onload = function() {
        page = this.response.body;
    }

    Array.from(overlay).map((element, index) => {
        setTimeout(() => {
            element.style.width = "100%";
        }, 200 * index)
    });

    overlay[2].addEventListener('transitionend', () => {
        document.body = page;
    });

}

function displayHome() {
    xhr.open('GET', "index.html", true);
    xhr.responseType = "document";
    xhr.send();

    xhr.onload = function() {
        page = this.response.body;
    }


    Array.from(overlay).map((element, index) => {
        setTimeout(() => {
            element.style.width = "0%";
        }, 200 * index)
    });

    overlay[2].addEventListener('transitionend', () => {
        document.body = page;
        initHome();
    });
}

// parallax
function parallaxIt(e, target, movement, screen) {
    const width = screen.getBoundingClientRect().width;
    const height = screen.getBoundingClientRect().height

    gsap.to(target, 1, {
        x: (e.pageX - width / 2) / width * movement,
        y: (e.pageY - height / 2) / height * movement
    });
}