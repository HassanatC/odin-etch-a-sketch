function createBoard(length) {
    let board = document.querySelector('.board');
    board.style.gridTemplateColumns = `repeat(${length} , 1fr)`;
    board.style.gridTemplateRows = `repeat(${length} , 1fr)`;

    let size = length * length;
    while (size < board.childElementCount) {
        board.removeChild(board.lastChild);
    }

    let squares = board.querySelectorAll('div');
    for (let square of squares) {
        square.style.backgroundColor = 'white';
    }

    // loop is used to generate the board and the square divs on the sketchpad.
    let amount = size - board.childElementCount;
    for (let i = 0; i < amount; i++) {
        let square = document.createElement('div');
        square.style.backgroundColor = 'white';
        square.addEventListener('mouseover', function () {
            square.style.backgroundColor = 'black';
        });
        board.appendChild(square);
    }
}

// when called, upon using let amount = size * size, createBoard creates a board based on the input variables.
createBoard(16);

// used to change the effect of the input textbox.
function changeBoard(input) {
    input = parseInt(input);
    if (input < 2 || input > 128) {
        alert(`Your board size is too ${input < 2 ? 'small' : 'big'}`);
        return;
    }
    createBoard(input);
};

const resetButton = document.getElementById('reset');
resetButton.addEventListener('click', function () {
    createBoard(16);
});