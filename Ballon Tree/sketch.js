let scale = 15;


function setup() {
  createCanvas(windowWidth/2, windowHeight/2);
  background(255);
  
}

function draw() {

  background(255);
  randomSeed(20);
  let branchAngle = map(mouseX, 0, width, 10, 45);
  //draws the tree starting at the bottom center

  drawTree(width/2, height*0.9, 90, branchAngle, 7);
}

function drawLine(x1,  y1,  x2,  y2,  depth) {
  //draw a line segment connecting (x1,y1) to (x2,y2)
  stroke(0); //set the stroke color to black
  line(x1, y1, x2, y2); //draw the line from (x1, y1) tp (x2, y2)
}

function drawTree(x1, y1, angle, branchAngle, depth) { //draws tree
  if (depth > 0) {
    let x2 = x1 + (cos(radians(angle))*depth*scale);     //calculate endpoints of current branch
    let y2 = y1 - (sin(radians(angle))*depth*scale);     //using trig ratios. Get shorter based on depth
    //draws the current branch
    drawLine(x1, y1, x2, y2, depth);
    //if the depth is shallow enough, add a leaf at the branch's end
    if (depth < 5) {
      drawLeaf(x2, y2, depth);
    }

    //3-branch tree
    //recursively draw smaller branches
    drawTree(x2, y2, angle-branchAngle, branchAngle, depth-1); //left branch
    drawTree(x2, y2, angle, branchAngle, depth-1); //middle branch
    drawTree(x2, y2, angle+branchAngle, branchAngle, depth-1); //right branch
  }
}

function drawLeaf(x, y, depth) {
  let leafSize = random(depth*2, depth*4); //finds leaf size based on depth

  fill(random(0,255), random(0,255), random(0,255)); //sets a random color for the leaf
  noStroke(); //deletes the stroke for the leaf
  ellipse(x, y, leafSize+5, leafSize+5); //shape of leaf
}

function keyPressed() {

}
