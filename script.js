const cont = document.querySelector('.canva-container');
let isDrawing = true;

const backColor = document.getElementById('background-color-picker');
const drawColor = document.getElementById('drawing-color-picker');
const clearButton = document.getElementById('clear-button');

const slider = document.getElementById("sizeSlider");
const output = document.getElementById("sizeValue");
output.innerHTML = slider.value;

let size = slider.value;

slider.addEventListener('change', function () {
    size = this.value;
    clearGrid();
    createGrid(size);
});

slider.oninput = function () {
    output.innerHTML = this.value;
}

clearButton.addEventListener('click', () => {
    clearGrid();
    createGrid(size);
})

function clearGrid() {
    cont.innerHTML = '';
}

function createGrid(size) {
    cont.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    cont.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    for (let i = 0; i < size * size; i++) {
        const square = document.createElement('div');
        square.className = 'square';
        square.style.backgroundColor = backColor.value;
        cont.appendChild(square);
    }
}

drawColor.addEventListener('input', () => {
    isDrawing = true;
});

backColor.addEventListener('input', () => {
    const squares = document.querySelectorAll('.square');
    squares.forEach(square => {
        square.style.backgroundColor = backColor.value;
    });
});

cont.addEventListener('mouseover', (event) => {
    if (isDrawing && event.target.classList.contains('square')) {
        event.target.style.backgroundColor = drawColor.value;
        event.target.classList.add('changed-square');
    }
});

createGrid(size);
