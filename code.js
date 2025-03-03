const container = document.querySelector('#grid-container')
const CANVAS_SIZE = 800;

createGrid(100);

document.querySelector('#change-grid-size').addEventListener('click', () => {
    let gridSize = ""
    do {
        gridSize = prompt("What size should the grid be?", 50);
        if (gridSize == null) {
            return
        }
        gridSize = parseInt(gridSize)
    } while (isNaN(gridSize));
    container.innerHTML = "";
    createGrid(gridSize); 
});

document.querySelector('#reset-grid').addEventListener('click', () => {
    document.querySelectorAll('.grid-element').forEach((el) => {
        el.style.backgroundColor = "";
    })
})

function createGrid(gridElements) {
    const gridElementSize = `${CANVAS_SIZE / gridElements}px`
    for (let i = 0; i < gridElements * gridElements; i++) {
        el = document.createElement('div');
        el.classList.toggle('grid-element');
        el.style.width = gridElementSize;
        el.style.height = gridElementSize;
        el.addEventListener('mouseover', (e) => {
            e.target.style.backgroundColor = "black";
        })
        container.appendChild(el);
    }
}