const body = document.querySelector('body');
const container = document.createElement('div');

//grid size 16x16
let gridSize = 256;


container.classList.add('container');
body.appendChild(container);


//create 
function createSquare(squareDiv) {
    var squareDiv = document.createElement('div');
    squareDiv.setAttribute("class", "square");
    container.appendChild(squareDiv);
}

//create grids function
function createGrid(size) {
    let i = 1;

    while(i <= size){
        createSquare(i);
        i++;
    }
}

createGrid(gridSize);
