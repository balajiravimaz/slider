const slide = document.querySelector(".slide");
const img = document.querySelectorAll(".img");
const right = document.querySelector(".right");
const left = document.querySelector(".left");

let counter = 1;
const len = img.length;

// Dots Navigation
const doc = document.querySelector(".dots");


for (let i = 0; i < len; i++) {
    const dot = document.createElement("div");
    dot.className = "dot";
    doc.appendChild(dot);
}


const btn = document.querySelectorAll(".dot");

btn[0].style.background = "white";

btn.forEach((btns, i) => {
    btns.addEventListener("click", (e) => {
        slide.style.transform = `translateX(-${i * 100}%)`;
        counter = counter + i;
        e.target.style.background = "white";
    })
})


// Arrows Navigation
const nextSlide = () => {
    slide.style.transform = `translateX(-${counter * 100}%)`;
    counter++;
}

const firstSlide = () => {
    slide.style.transform = `translateX(0)`;
    counter = 1;
}

const prevSlide = () => {
    slide.style.transform = `translateX(-${(counter - 2) * 100}%)`;
    counter--;
}

const lastSlide = () => {
    slide.style.transform = `translateX(-${(len - 1) * 100}%)`;
    counter = len;
}

right.addEventListener("click", () => {
    counter < len ? nextSlide() : firstSlide();
})


left.addEventListener("click", () => {
    counter > 1 ? prevSlide() : lastSlide();
})