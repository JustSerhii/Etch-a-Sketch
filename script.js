const cont = document.querySelector('.container');
let size = 16;

const sizeButton = document.getElementById('size-button');

sizeButton.addEventListener('click', () => {
    size = parseInt(prompt('Enter the size'));
    if (size > 1 && size <= 100) {
        clearGrid();
        createGrid(size);
    }
    else alert('Size should be between 2 and 100, inclusive');
})

function clearGrid() {
    const squares = document.querySelectorAll('.square');
    squares.forEach(square => {
        square.remove();
    });
}

function createGrid(size) {
    cont.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    cont.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    for (let i = 0; i < size * size; i++) {
        const squares = document.createElement('div');
        squares.className = 'square';
        cont.append(squares);
    }

}

cont.addEventListener('mouseover', (event) => {
    if (event.target.classList.contains('square')) {
        event.target.classList.add('changedSquare');
    }
});

createGrid(size);
