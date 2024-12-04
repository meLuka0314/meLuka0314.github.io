// Puzzle game
// Luka Sullivan
// December 3, 2024
// This is a puzzle game that you win by making all tiles black or white. You can change your pattern by pressing space, making it a square or a rectangle. You can also change the arrangement by pressing shift and R at the same time.

let NUM_ROWS = 4; //numbers of rows
let NUM_COLS = 5; //number of columns
let rectWidth, rectHeight; //width and height of rectangle
let currentRow, currentCol; //cuurent row and col
let gridData = [
  [0,0,0,0,0],
  [0,0,0,0,0],
  [0,255,0,0,0],
  [0,255,255,0,0]
]; //grid data
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
  background(220);  //backround 
  determineActiveSquare();   //figure out which tile the mouse cursor is over
  drawGrid();                //render the current game board to the screen (and the overlay)
  drawOverlay(); //draws the overlay pattern 
  winCondition(); //checks if all tiles are white or black
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
  //flips the tiles in square patterns
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

function mousePressed() {   //when left clicked
  if (flipPattern === 'cross') {
    flipCrossPattern(); //flips tiles in cross pattern
  } else {
    flipSquarePattern(); //flips tiles in square pattern
  }
  if (keyIsDown(SHIFT)) {  //when shift is pressed
    if (overlayPattern === 'cross') {
      flipCrossPattern(); //flip it in square pattern again so that the patterns cancell out
      flip(currentCol, currentRow); //one tile gets flipped
    } //center
  } 
  if (keyIsDown(SHIFT)) { 
    if (overlayPattern === 'square') {
      flipSquarePattern(); //flip it in square pattern again so that the patterns cancell out
      flip(currentCol, currentRow); //flips one tile
    } 
  }
}

function randomizeStartingArrangement() {
  //makes an random arrangement of tiles
  gridData = [];
  for (let i = 0; i < NUM_ROWS; i++) {
    let newRow = [];
    for (let j = 0; j < NUM_COLS; j++) {
      newRow.push(random([0, 255])); //white or black tile at random
    }
    gridData.push(newRow);
  }
}

function highlight(col, row) {
  //makes an highlight for shapes
  if (col >= 0 && col < NUM_COLS && row >= 0 && row < NUM_ROWS) {
    rect(col*rectWidth, row*rectHeight, rectWidth, rectHeight); //shape
  }
}

function drawOverlay() {
  fill(100, 100, 255, 150); //color of overlay
  noStroke(); //no stroke to it 

  if (overlayPattern === 'cross') {
    highlight(currentCol, currentRow); //center tile
    highlight(currentCol-1, currentRow); //left
    highlight(currentCol+1, currentRow); //right
    highlight(currentCol, currentRow-1); //top
    highlight(currentCol, currentRow+1); //bottom 
  } 
  
  if (overlayPattern === 'square') {
    highlight(currentCol, currentRow); //center tile
    highlight(currentCol-1, currentRow); //left
    highlight(currentCol-1, currentRow-1); //left top
    highlight(currentCol-1, currentRow+1); //left bottom
    highlight(currentCol+1, currentRow); //right
    highlight(currentCol+1, currentRow-1); //right top
    highlight(currentCol+1, currentRow+1);//roght bottom
    highlight(currentCol, currentRow-1); //top
    highlight(currentCol, currentRow+1); //bottom 
  }
}

function flip(col, row){
  // given a column and row for the 2D array, flip its value from 0 to 255 or 255 to 0
  // conditions ensure that the col and row given are valid and exist for the array. If not, no operations take place.
  if (col >= 0 && col < NUM_COLS ){
    if (row >= 0 && row < NUM_ROWS){
      if (gridData[row][col] === 0) 
        gridData[row][col] = 255;
      else gridData[row][col] = 0;
    }
  }
}

function determineActiveSquare(){
  //finds tile that cursor is on
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
  if (key === ' ') { //when key is pressed
    if (overlayPattern === 'cross') {
      overlayPattern = 'square'; //switches cross overlay pattern to square when pressed
    } else {
      overlayPattern = 'cross';
    }

    if (flipPattern === 'cross') { //switches cross flip pattern to square when pressed
      flipPattern = 'square';
    } else {
      flipPattern = 'cross';
    }
  }
  if (key === 'R') {
    randomizeStartingArrangement(); //when r key is pressed (and shift) arrangement of tiles changes randomly
  }
}

function winCondition() {
  let whiteCount = 0; //count of white starts at 0
  let blackCount = 0; //count of black starts at 0

  for (let row = 0; row < NUM_ROWS; row++) {
    for (let col = 0; col < NUM_COLS; col++) {
      if (gridData[row][col] === 255) { //when tile is black
        blackCount++; //adds point to black
      }
      if (gridData[row][col] === 0) { //when tiles is white
        whiteCount++; //adds point to white
      }
    }

    if (whiteCount === 20) { //when all 20 tiles are white show "you won"
      fill(0, 255, 0); //color is green
      textSize(32); //text size is 32
      textAlign(CENTER, CENTER); //at center
      text("You won", width/2, height/2); //shows text you won
    } else if (blackCount === 20) { //when all 20 tiles are black show "you won"
      fill(0, 255, 0); //colore is green
      textSize(32); //size is 32
      textAlign(CENTER, CENTER); //at center
      text("You won", width/2, height/2); //shows text you won
    }
  }
}