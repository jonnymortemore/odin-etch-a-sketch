const container = document.querySelector('#grid-container')
const CANVAS_SIZE = 800;

createGrid(10);

document.querySelector('#change-grid-size').addEventListener('click', () => {
    let gridSize = ""
    do {
        gridSize = prompt("What size should the grid be? (Must be 100 or less)", 50);
        if (gridSize == null) {
            return
        }
        gridSize = parseInt(gridSize)
    } while (isNaN(gridSize) || gridSize > 100);
    container.innerHTML = "";
    createGrid(gridSize); 
});

document.querySelector('#reset-grid').addEventListener('click', () => {
    document.querySelectorAll('.grid-element').forEach((el) => {
        resetGridElement(el);
    })
})

function resetGridElement(el) {
    el.style.opacity = 0;
    el.dataset.opacity = 0;
}

function createGrid(gridElements) {
    const gridElementSize = `${CANVAS_SIZE / gridElements}px`
    for (let i = 0; i < gridElements * gridElements; i++) {
        el = document.createElement('div');
        el.classList.toggle('grid-element');
        el.style.width = gridElementSize;
        el.style.height = gridElementSize;
        el.dataset.opacity = 0;
        el.style.opacity = 0;
        el.style.backgroundColor = "black";
        el.addEventListener('mouseover', (e) => {
            let el = e.target;
            let opacity = parseInt(el.dataset.opacity);
            if (opacity < 10) {
                opacity += 1
                el.dataset.opacity = opacity
                el.style.opacity = 0.1 * opacity
            }
            
        });
        el.addEventListener('click', (e) => {
            resetGridElement(e.target);
        });
        container.appendChild(el);
    }
}