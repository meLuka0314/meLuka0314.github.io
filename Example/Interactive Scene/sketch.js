//Interactive Scene
//Luka Sullivan
//October 8th
//A drawing of a winter scene where the backround can be changed by middle mouse key and the ground color by space key. 

let proX, proY;
let groundColor;
let r, g, b; // Declare variables for background color

function setup() {
  createCanvas(2000, 1000);
  proX = width / 2;
  proY = height / 2;
  groundColor = color(255, 255, 255); // Initial ground color
  r = 185; // Initial background color values
  g = 60;
  b = 255;
  background(r, g, b);
}

function draw() {
  // Clear background
  background(r, g, b);

  rectMode(CENTER);
  
  // Draw ground with dynamic color
  fill(groundColor);
  noStroke();
  rect(0, 925,  4000, 400); // Adjusted to fit the canvas

  // Draw mountains
  fill(150, 150, 255); // mountain 4
  noStroke();
  triangle(1300, 725, 2000, 725, 1650, 250);
  
  fill(50, 50, 155); // shadow
  noStroke();
  triangle(1875, 725, 2000, 725, 1650, 250);
  
  fill(25, 25, 25); // mountain 5
  noStroke();
  triangle(1300, 725, 750, 725, 1025, 300);
  
  fill(2, 0, 0); // shadow
  noStroke();
  triangle(1300, 725, 1200, 725, 1025, 300);
  
  fill(100, 255, 255); // mountain 2
  noStroke();
  triangle(250, 725, 1150, 725, 700, 50);
  
  fill(100, 250, 200); // mountain 6
  noStroke();
  triangle(300, 725, 750, 725, 525, 345);
  
  fill(50, 200, 150); // shadow 6
  noStroke();
  triangle(650, 725, 750, 725, 525, 345);
  
  fill(100, 150, 165); // mountain 1
  noStroke();
  triangle(0, 725, 450, 725, 250, 175);
  
  fill(100, 195, 195); // shadow
  noStroke();
  triangle(400, 725, 500, 725, 250, 175);
  
  fill(150, 200, 200); // shadow 2
  noStroke();
  triangle(850, 725, 1150, 725, 700, 50);
  
  fill(0, 120, 200); // mountain 3
  noStroke();
  triangle(1800, 725, 850, 725, 1300, 150);
  
  fill(0, 50, 255); // shadow
  noStroke();
  triangle(1800, 725, 1600, 725, 1300, 150);

  fill(0, 0, 0); // Signiture
  textSize(100)
  text("Luka Sullivan", 1100, 850)
  
  // Draws Snowman
  fill(255, 255, 255);
  noStroke();
  circle(880, 500, 120);
  
  fill(255, 255, 255);
  noStroke();
  circle(880, 630, 200);
  
  fill(0, 0, 0);
  noStroke();
  circle(862, 480, 15);
  
  fill(0, 0, 0);
  noStroke();
  circle(898, 480, 15);
  
  fill(200, 100, 0);
  noStroke();
  triangle(880, 500, 920, 505, 880, 510);
  
  fill(0, 0, 0);
  noStroke();
  circle(852, 515, 10);
  
  fill(0, 0, 0);
  noStroke();
  circle(862, 524, 10);
  
  fill(0, 0, 0);
  noStroke();
  circle(876, 528, 10);
  
  fill(0, 0, 0);
  noStroke();
  circle(890, 529, 10);
  
  fill(0, 0, 0);
  noStroke();
  circle(903, 527, 10);
  
  fill(0, 0, 0);
  noStroke();
  rect(880, 430, 65, 40);
  
  fill(0, 0, 0);
  noStroke();
  rect(880, 450, 100, 20);
  
  fill(0, 0, 220);
  noStroke();
  circle(880, 570, 12);
  
  fill(0, 0, 220);
  noStroke();
  circle(880, 590, 12);
  
  fill(0, 0, 220);
  noStroke();
  circle(880, 610, 12);
  
  fill(150, 75, 0);
  noStroke();
  quad(950, 590, 950, 580, 1030, 610, 1030, 620);
  
  fill(150, 75, 0);
  noStroke();
  quad(810, 590, 810, 580, 730, 610, 730, 620);
  
  stroke(0, 0, 0);
  strokeWeight(10);
  fill(0, 0, 0, 0);
  circle(mouseX, mouseY - 75, 90); // Head
  
  line(mouseX, mouseY - 30, mouseX, mouseY + 50); // Body
  let armLength = 50; // arms
  line(mouseX - armLength, mouseY - 30, mouseX + armLength, mouseY - 30); // Arms
  line(mouseX, mouseY + 50, mouseX - 30, mouseY + 100); // Left leg
  line(mouseX, mouseY + 50, mouseX + 30, mouseY + 100); // Right leg
  proX = mouseX;
  proY = mouseY;
}

// Change background when middle mouse clicked
function mousePressed() {
  if (mouseButton === CENTER) {
    r = random(0, 255);
    g = random(0, 255);
    b = random(0, 255);
  }
}

// Change ground color when the spacebar pressed
function keyPressed() {
  if (keyCode === 32) { // 32 is spacebar
    let newGroundColor;
    do {
      let groundR = random(0, 255);
      let groundG = random(0, 255);
      let groundB = random(0, 255);
      newGroundColor = color(groundR, groundG, groundB); // Generates new ground color
    } while (newGroundColor.levels[0] === r && newGroundColor.levels[1] === g && newGroundColor.levels[2] === b); // Check if it's the same as background
    groundColor = newGroundColor; // Change ground color
  } // I couldnt figure out how to do the 4-state variable so I just did random backround
}
