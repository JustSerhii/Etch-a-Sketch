const cont = document.querySelector('.container');

for (let i = 0; i < 16*16; i++){
    const squares = document.createElement('div');
    squares.className = 'square';

    cont.append(squares);
}

const squares1 = document.querySelectorAll('.square')

squares1.forEach(square => {
    square.addEventListener('mouseover', () => {
        square.className = 'changedSquare';
    });
});



