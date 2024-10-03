let circleX;
let circleY;

function setup() {
  createCanvas(windowWidth, windowHeight);
  circleX = 880; // Initial X position
  circleY = 500; // Initial Y position
}

function draw() {
  background(220);
  rectMode(CENTER);

  // Draw the character
  fill(255);
  noStroke();
  circle(circleX, circleY, 120); // Head

  fill(255);
  noStroke();
  circle(circleX, circleY + 130, 200); // Body

  fill(0);
  noStroke();
  circle(circleX - 18, circleY - 20, 15); // Left eye
  circle(circleX + 18, circleY - 20, 15); // Right eye

  fill(200, 100, 0);
  noStroke();
  triangle(circleX, circleY, circleX + 40, circleY + 5, circleX, circleY + 10); // Mouth

  fill(0);
  noStroke();
  circle(circleX - 28, circleY + 15, 10); // Left cheek
  circle(circleX - 18, circleY + 24, 10); // Middle cheek
  circle(circleX - 4, circleY + 28, 10); // Right cheek

  fill(0);
  noStroke();
  rect(circleX, circleY - 70, 65, 40); // Hat brim
  rect(circleX, circleY - 50, 100, 20); // Hat top

  fill(0, 0, 220);
  noStroke();
  circle(circleX, circleY + 70, 12); // Button 1
  circle(circleX, circleY + 90, 12); // Button 2
  circle(circleX, circleY + 110, 12); // Button 3

  fill(150, 75, 0);
  noStroke();
  quad(circleX + 70, circleY + 90, circleX + 70, circleY + 80, circleX + 150, circleY + 110, circleX + 150, circleY + 120); // Right arm
  quad(circleX - 70, circleY + 90, circleX - 70, circleY + 80, circleX - 150, circleY + 110, circleX - 150, circleY + 120); // Left arm
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    circleX -= 5; // Move left
  } else if (keyCode === RIGHT_ARROW) {
    circleX += 5; // Move right
  } else if (keyCode === UP_ARROW) {
    circleY -= 5; // Move up
  } else if (keyCode === DOWN_ARROW) {
    circleY += 5; // Move down
  }
}