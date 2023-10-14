const cont = document.querySelector('.canva-container');
let size = 16;
let isDrawing = true; 

const sizeButton = document.getElementById('size-button');
const backColor = document.getElementById('background-color-picker');
const drawColor = document.getElementById('drawing-color-picker');

sizeButton.addEventListener('click', () => {
    size = parseInt(prompt('Enter the size'));
    if (size > 1 && size <= 100) {
        clearGrid();
        createGrid(size);
    } else {
        alert('Size should be between 2 and 100, inclusive');
    }
});

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
