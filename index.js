const counterDisplay = document.querySelector("h4");
let counter = 0;

const bubbleMaker = () => {

    const bubble = document.createElement("span");
    // console.log(bubble);

    bubble.classList.add("bubble");

    document.body.appendChild(bubble);

    // random size for the bubbles
    const size = Math.random() * 200 + 100 + "px";
    // console.log(size);
    bubble.style.height = size;
    bubble.style.width = size;

    //random position for the bubbles
    bubble.style.top = Math.random() * 100 + 50 + "%";
    bubble.style.left = Math.random() * 100 + "%";

    // customize the css class left
    const direction = Math.random() > 0.5 ? 1 : -1;
    bubble.style.setProperty('--left', Math.random() * 100 * direction + "%");

    // bubble destruction on click
    bubble.addEventListener('click', () => {
        counter++;
        counterDisplay.textContent = counter;
        bubble.remove();
    });

    // bubbles destruction after 9 seconds
    setTimeout(() => {
        bubble.remove();
    }, 9000);
};

setInterval(bubbleMaker, 300);
