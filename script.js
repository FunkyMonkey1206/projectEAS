const body = document.querySelector('body');
const container = document.createElement('div');
const clearBtn = document.createElement('button');
const createBtn = document.createElement('button');



//grid size 16x16
let gridSize = 256;
let side = 16;

clearBtn.classList.add('clearBtn');
clearBtn.classList.add('createBtn');
container.classList.add('container');
body.appendChild(container);
body.appendChild(clearBtn);
body.appendChild(createBtn);
clearBtn.textContent = 'clear';
createBtn.textContent = 'create';

//create 
function createSquare(squareDiv, squareSide) {
    var squareDiv = document.createElement('div');
    var squareHeight = 320 / Number(side);
    var squareWidth = 320 / Number(side);

    squareDiv.setAttribute("class", "square");
    squareDiv.style.width = `${squareWidth}px`;
    squareDiv.style.height = `${squareHeight}px`;
    container.appendChild(squareDiv);
}



//create grid function
function createGrid(size) {
    let i = 1;
    clearGrid()
    while(i <= size){
        createSquare(i);
        i++;
    };
    enableEtch();

}

//clear grid function
function clearGrid() {
  var clearSqr = document.querySelectorAll('div.square')
  clearSqr.forEach((sqr) => {
    container.removeChild(sqr);
  });
};

createGrid(gridSize);

//create 
function enableEtch() {
    var sqr = document.querySelectorAll('div.square');
    sqr.forEach((sqr) => {
        sqr.addEventListener('mouseover', ()  => {
            var rgbValue = Math.random() * 100;
            sqr.classList.add('etch');
            // sqr.style.cssText = `#${rgbValue}`;
        });
    });
};

clearBtn.addEventListener('click', () => {
    clearGrid();
});

createBtn.addEventListener('click', () => {
    side = prompt('how many squares per side?');
    gridSize = Number(side) * Number(side);
    createGrid(gridSize, Number(side));
});




//next step: figure out dynamic square re-sizing