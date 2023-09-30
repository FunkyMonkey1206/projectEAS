const body = document.querySelector('body');
const container = document.createElement('div');
const clearBtn = document.createElement('button');
const createBtn = document.createElement('button');

//grid size 16x16
let gridSize = 256;

clearBtn.classList.add('clearBtn');
clearBtn.classList.add('createBtn');
container.classList.add('container');
body.appendChild(container);
body.appendChild(clearBtn);
body.appendChild(createBtn);
clearBtn.textContent = 'clear';
createBtn.textContent = 'create';

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

function clearGrid() {
  var clearSqr = document.querySelectorAll('div.square')
  clearSqr.forEach((sqr) => {
    container.removeChild(sqr);
  });
};

createGrid(gridSize);

//create 

const sqr = document.querySelectorAll('div.square');

sqr.forEach((sqr) => {

    sqr.addEventListener('mouseover', ()  => {
        sqr.classList.add('etch');
        // sqr.style.backgroundColor = 'blue';
    });
});

clearBtn.addEventListener('click', () => {
    clearGrid();
});

createBtn.addEventListener('click', () => {
    createGrid(gridSize);
});