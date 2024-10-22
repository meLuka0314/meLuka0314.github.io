// Cars Cars Cars 
// Luka Sullivan

let eastbound = [];
let westbound = [];

function setup() {
  createCanvas(windowWidth, windowHeight);

}


function draw(){
  background(220);
  drawRoad();

}

function drawRoad(){
  fill(30, 30, 30);
  rect(0, 300, 950, 350);

  fill(255, 255, 255);
  for (let x = 0; x < windowWidth; x += 40) {
    rect(x, windowWidth/2, 20, 10);
  }

}

class vehicle {
  constructor(x, y, type, color, s_p, direction, x_s) {     //x, y, type, color, starting position, direction, x speed 
    
}