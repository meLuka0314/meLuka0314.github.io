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
  drawOverlay();
}



function flipCrossPattern(){
  // cross-shaped pattern flips on a mouseclick. Boundary conditions are checked within the flip function to ensure in-bounds access for array
  flip(currentCol, currentRow);
  flip(currentCol-1, currentRow);
  flip(currentCol+1, currentRow);
  flip(currentCol, currentRow-1);
  flip(currentCol, currentRow+1);
}

function flipSquarePattern() {
  for (let i = -1; i <= 1; i++) {
    for (let j = -1; j <= 1; j++) {
      flip(currentCol + j, currentRow + i);
    }
  }
}

function mousePressed() {
  if (keyIsDown(SHIFT)){ //when shift key is pressed
    flip(currentCol, currentRow);
  } else {
    flipPattern === 'cross' ? flipCrossPattern() : flipSquarePattern();
  }
}

function randomizeStartingArrangement() {
  gridData = [];
  for (let i = 0; i < NUM_ROWS; i++) {
    let newRow = [];
    for (let j = 0; j < NUM_COLS; j++) {
      newRow.push(random([0, 255]));
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
  } else {
    for (let i = -1; i <= 1; i++) {
      for (let j = -1; j <= 1; j++){
        highlightSquare(currentCol + j, currentRow + i);
      }
    }
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
    if (keyIsDown(SHIFT)) {
      overlayPattern = (overlayPattern === 'cross') ? 'square' : 'cross';
    } else {
      flipPattern = (flipPattern === 'cross') ? 'square' : 'cross';
    }
  }
  if (key === 'R') {
    randomizeStartingArrangement();
  }
}


