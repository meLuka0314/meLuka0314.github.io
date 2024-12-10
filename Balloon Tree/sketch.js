// Balloon Tree
// Luka Sullivan
// December 19, 2024
// This is a program that makes a tree that has balloons on it. Balloons can be added by x and deleted by z. The angles of the branches can be moved by the mouse as well.

let scale = 15; //sets scale to 15 
let leafDepth = 5; //sets leafDepth to 5

function setup() {
  createCanvas(windowWidth/2, windowHeight/2);
  background(255);
  keyPressed(); //calls keypressed
}

function draw() {
  background(255); //clears canvas with white background
  randomSeed(20); //makes colors constant and not flashing
  let branchAngle = map(mouseX, 0, width, 10, 30); //maps mouse x position to control the branch angle
  //draws the tree starting
  drawTree(width/2, height*0.9, 90, branchAngle, 7);
}

function drawLine(x1,  y1,  x2,  y2, depth) {
  //draw a line segment connecting (x1,y1) to (x2,y2)
  stroke(0); //set the stroke color to black
  strokeWeight(depth); //set stroke thickness  based on depth
  line(x1, y1, x2, y2); //draw the line from (x1, y1) tp (x2, y2)
}

function drawTree(x1, y1, angle, branchAngle, depth) { //recursivly draws tree
  if (depth > 0) { //continues only if the depth is greater than 0
    let x2 = x1 + (cos(radians(angle))*depth*scale); //calculate endpoints of current branch
    let y2 = y1 - (sin(radians(angle))*depth*scale); //using trig ratios. Get shorter based on depth
    //draws the current branch
    drawLine(x1, y1, x2, y2, depth * 0.5);


    //3-branch tree
    //recursively draw smaller branches
    drawTree(x2, y2, angle-branchAngle, branchAngle, depth-1); //left branch
    drawTree(x2, y2, angle, branchAngle, depth-1); //middle branch
    drawTree(x2, y2, angle+branchAngle, branchAngle, depth-1); //right branch

    //if the depth is shallow enough, add a leaf at the branch's end
    if (depth < leafDepth) {
      drawLeaf(x2, y2, depth);
    }
  }
}

//function to draw a leaf at the end of a branchT
function drawLeaf(x, y, depth) {
  let leafSize = random(depth*2, depth*4); //finds leaf size based on depth

  fill(random(0,255), random(0,255), random(0,255)); //sets a random color for the leaf
  noStroke(); //deletes the stroke for the leaf
  ellipse(x, y, leafSize+5, leafSize+5); //shape of leaf
}

//function for add and deleting balloons when key is pressed
function keyPressed() {
  if (key === 'z') { //when z is pressed, it decreases the minimum depth 
    leafDepth = max(0, leafDepth - 1); //makes sure leaf depth doesnt go below 0
  }
  if (key === 'x') { //when x is pressed, it increases the maximum leaf depth 
    leafDepth = min(7, leafDepth + 1); //makes sure leaf depth doesnt go above 7
  }
}

