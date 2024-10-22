//Perlin Noise Project
//Luka Sullivan
//October 22
//A random turrain generator with a line of average and a flag of maximum


let rectWidth = 1;
let rInterval = 0.01;

function setup() {
 createCanvas(windowWidth, windowHeight);
 background(220);
frameRate(30);
}

function generateTerrain() {
  let totalHeight = 0;
  let numRects = 0;
  let rTime = 5;
  let peakX = 0;
  let peakY = 0;

  rTime = 5 + frameCount/10
  
  for (let x = 0; x <= windowWidth; x += rectWidth) {
    let rectHeight = noise(rTime);
    rectHeight = map(rectHeight, 0, 1, 0, 500);
    rTime += rInterval;

    totalHeight += rectHeight;
    numRects++;

    if (rectHeight > peakY) {
      peakX = x;
      peakY = rectHeight;
    }

    noFill();
    strokeWeight(4);
    stroke(51);
    rect(x, windowHeight, rectWidth, -rectHeight);
  }

  // Calculate average height
  let averageHeight = totalHeight / numRects;

  // Draw average line
  stroke(255, 0, 0);
  strokeWeight(2);
  line(0, windowHeight - averageHeight, windowWidth, windowHeight - averageHeight);

  // Draw flag
  drawFlag(peakX, windowHeight - peakY);
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    rectWidth = max(0.1, rectWidth - 1); // make sure width does not go negative
  } else if (keyCode === RIGHT_ARROW) {
    rectWidth += 1;
  }
}

function drawFlag(x, y) {
  fill(255, 0, 0);
  rect(x, y - 60, 30, 20);
  stroke(0);
  line(x,  y,  x, y - 40); // Draw flagpole
}

function draw() {
  background(225);
  generateTerrain();
}