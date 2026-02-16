const container = document.querySelector(".container");



for (let i = 0; i < 256; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    container.appendChild(square);
}

const allSquare = document.querySelectorAll(".square");
allSquare.forEach((div) => {
    div.addEventListener("mouseenter", () => {
        div.classList.toggle("painted")
    })
})