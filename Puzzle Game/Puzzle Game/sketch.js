// Puzzle game
// Luka Sullivan
// December 3, 2024
//

let NUM_ROWS = 4; //numbers of rows
let NUM_COLS = 5; //number of columns
let rectWidth, rectHeight;
let currentRow, currentCol;
let gridData = [
  [0,0,0,0,0],
  [0,0,0,0,0],
  [0,255,0,0,0],
  [0,255,255,0,0]
];
let overlayPattern = 'cross'; //the current overlay pattern is cross
let flipPattern = 'cross'; //current flip pattern



function setup() {
  // Determine the size of each square. Could use windowHeight,windowHeight  for Canvas to keep a square aspect ratio
  createCanvas(windowWidth, windowHeight);
  rectWidth = width/NUM_COLS; //calculates the width for grid
  rectHeight = height/NUM_ROWS;  //calculates the height for grid
  randomizeStartingArrangement(); //starts the program with random arrangement of colored grid

}

function draw() {
  background(220);  
  determineActiveSquare();   //figure out which tile the mouse cursor is over
  drawGrid();                //render the current game board to the screen (and the overlay)
  drawOverlay(); //draws the overlay pattern 
  winCondition();
}



function flipCrossPattern(){
  // cross-shaped pattern flips on a mouseclick. Boundary conditions are checked within the flip function to ensure in-bounds access for array
  //cross pattern
  flip(currentCol, currentRow); //center
  flip(currentCol-1, currentRow); //left
  flip(currentCol+1, currentRow); //right
  flip(currentCol, currentRow-1); //up
  flip(currentCol, currentRow+1); //down
}

function flipSquarePattern() {
  flip(currentCol, currentRow); //center
  flip(currentCol-1, currentRow); //left
  flip(currentCol-1, currentRow-1); //left top
  flip(currentCol-1, currentRow+1); //left bottom
  flip(currentCol+1, currentRow); //right
  flip(currentCol+1, currentRow-1); //right top
  flip(currentCol+1, currentRow+1);//roght bottom
  flip(currentCol, currentRow-1); //top
  flip(currentCol, currentRow+1); //bottom
}


function mousePressed() {  
  if (keyIsDown(SHIFT)) { 
    flipCrossPattern();
    flip(currentCol, currentRow); //center
  } 


  if (flipPattern === 'cross') {
    flipCrossPattern();
  } else {
    flipSquarePattern();
  }



}

function randomizeStartingArrangement() {
  gridData = [];
  for (let i = 0; i < NUM_ROWS; i++) {
    let newRow = [];
    for (let j = 0; j < NUM_COLS; j++) {
      newRow.push(random([0, 255]));
      if g
    }
    gridData.push(newRow);
  }
}

function highlightSquare(col, row) {
  if (col >= 0 && col < NUM_COLS && row >= 0 && row < NUM_ROWS) {
    rect(col*rectWidth, row*rectHeight, rectWidth, rectHeight);
  }
}

function drawOverlay() {
  fill(100, 100, 255, 150);
  noStroke();

  if (overlayPattern === 'cross') {
    highlightSquare(currentCol, currentRow);
    highlightSquare(currentCol-1, currentRow);
    highlightSquare(currentCol+1, currentRow);
    highlightSquare(currentCol, currentRow-1);
    highlightSquare(currentCol, currentRow+1);
  } 
  
  if (overlayPattern === 'square') {
    highlightSquare(currentCol, currentRow); //center
    highlightSquare(currentCol-1, currentRow); //left
    highlightSquare(currentCol-1, currentRow-1); //left top
    highlightSquare(currentCol-1, currentRow+1); //left bottom
    highlightSquare(currentCol+1, currentRow); //right
    highlightSquare(currentCol+1, currentRow-1); //right top
    highlightSquare(currentCol+1, currentRow+1);//roght bottom
    highlightSquare(currentCol, currentRow-1); //top
    highlightSquare(currentCol, currentRow+1); //bottom
  }
}
function flip(col, row){
  // given a column and row for the 2D array, flip its value from 0 to 255 or 255 to 0
  // conditions ensure that the col and row given are valid and exist for the array. If not, no operations take place.
  if (col >= 0 && col < NUM_COLS ){
    if (row >= 0 && row < NUM_ROWS){
      if (gridData[row][col] === 0) gridData[row][col] = 255;
      else gridData[row][col] = 0;
    }
  }
}

function determineActiveSquare(){
  currentRow = int(mouseY / rectHeight);
  currentCol = int(mouseX / rectWidth);
}


function drawGrid(){
  // Render a grid of squares - fill color set according to data stored in the 2D array
  for (let x = 0; x < NUM_COLS ; x++){
    for (let y = 0; y < NUM_ROWS; y++){
      fill(gridData[y][x]); 
      rect(x*rectWidth, y*rectHeight, rectWidth, rectHeight);
    }
  }
}

function keyPressed() {
  if (key === ' ') {
    if (overlayPattern === 'cross') {
      overlayPattern = 'square'; 
    } else {
      overlayPattern = 'cross';
    }

    if (flipPattern === 'cross') {
      flipPattern = 'square';
    } else {
      flipPattern = 'cross';
    }
  }
  if (key === 'R') {
    randomizeStartingArrangement();
  }
}

function winCondition() {
  let score = 0;



  if (score === 20) {
    fill(0, 255, 0);
    text("you won", width/2, height/2);
  }
  if (score === -20) {
    fill(0, 255, 0);
    text("you won", width/2, height/2);
  }
}