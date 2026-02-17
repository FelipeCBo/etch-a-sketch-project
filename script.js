function createGrid(size) {
    const CONTAINER = document.getElementById("container");
    CONTAINER.innerHTML = "";

    const TOTAL_ITEMS = size * size;

    for (let i = 0; i < TOTAL_ITEMS; i++) {
        const GRID_ITEM = document.createElement("div");
        GRID_ITEM.classList.add("GRID_ITEM");
        CONTAINER.appendChild(GRID_ITEM);
    };
};

createGrid(16);

const allSquare = document.querySelectorAll(".GRID_ITEM");
allSquare.forEach((div) => {
    div.addEventListener("mouseenter", () => {
        div.classList.toggle("painted")
    })
})