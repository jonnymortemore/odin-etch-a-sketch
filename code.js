const container = document.querySelector('#grid-container')
const CANVAS_SIZE = 900;

createGrid(16);

function createGrid(gridElements) {
    const gridElementSize = `${CANVAS_SIZE / gridElements}px`
    console.log(gridElementSize)
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