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

// get project contents
const xhr = new XMLHttpRequest;
let project = undefined;

xhr.onload = function() {
    project = this.response.body;
}

xhr.open('GET', "projects.html", true);
xhr.responseType = "document";
xhr.send();


// homepage entrance
const initHome = () => {

}

const overlay = document.getElementsByClassName("overlay");

function displayProjects() {
    Array.from(overlay).map((element, index) => {
        setTimeout(() => {
            element.style.width = "100%";
        }, 200 * index)
    });
}

overlay[2].addEventListener('transitionend', () => {
    document.body = project;
});

// parallax

const bg = document.getElementById("container");
bg.addEventListener('mousemove', e => {
    parallaxIt(e, ".introLeft", 20);
    parallaxIt(e, ".introRight", -10);
});

function parallaxIt(e, target, movement) {
    const width = bg.getBoundingClientRect().width;
    const height = bg.getBoundingClientRect().height

    gsap.to(target, 1, {
        x: (e.pageX - width / 2) / width * movement,
        y: (e.pageY - height / 2) / height * movement
    });
}