// set the starting position of the cursor outside of the screen
let clientX = -100;
let clientY = -100;
const innerCursor = document.querySelector(".cursor");

const initCursor = () => {
    // add listener to track the current mouse position
    document.addEventListener("mousemove", e => {
        clientX = e.clientX;
        clientY = e.clientY;
    });

    const render = () => {
        innerCursor.style.transform = `translate(${clientX}px, ${clientY}px)`;

        requestAnimationFrame(render);
    };

    requestAnimationFrame(render);
};

initCursor();