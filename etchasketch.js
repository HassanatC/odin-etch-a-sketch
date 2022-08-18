
function createBoard(size) {


    let board = document.querySelector('.board');
    let squares = board.querySelectorAll('div');

    squares.forEach(div => div.remove());


    board.style.gridTemplateColumns = `repeat(${size} , 1fr)`;
    board.style.gridTemplateRows = `repeat(${size} , 1fr)`;



// loop is used to generate the board and the square divs on the sketchpad.

    let amount = size * size;


        for(let i = 0; i < amount; i++) {

        let square = document.createElement('div');
        square.style.backgroundColor = 'white';
        board.insertAdjacentElement('beforeend', square);
        
        // Mouse over and event listener causes the white square to turn black after putting cursor over it.

        square.addEventListener('mouseover', function changeSquare() {

            square.style.backgroundColor = 'black';

            })

        

        }

        
    }

    

// when called, upon using let amount = size * size, createBoard creates a board based on the input variables.

createBoard(16, 16);

changeBoard(16, 16);

// used to change the effect of the input textbox.

function changeBoard(input) {

    if (input >= 2 || input <= 64) {

    createBoard(input) 
    } else {
        alert("Too many squares have been selected!");
    
    }
 
};




const resetButton = document.getElementById('reset');

resetButton.addEventListener('click', function resetBoard() {

    board.innerHTML = " ";
    createBoard(16, 16);

});





 

 

