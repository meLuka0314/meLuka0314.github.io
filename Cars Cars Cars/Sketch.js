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
  for(let x = 0; x < eastbound.length; x++){
    eastbound(x)
  }

}
function mouseClicked(){
  eastbound.push(new vehicle(mouseX, mouseY, 1));

}

0
function drawRoad(){
  fill(30, 30, 30);
  rect(0, 300, 950, 350);

  fill(255, 255, 255);
  for (let x = 0; x < windowWidth; x += 40) {
    rect(x, windowWidth/2, 20, 10);
  }

}

class vehicle {
  constructor(x, y, dir) {  //x, y, type, color, starting position, direction, x speed 
    this.x = x;
    this.y = y;
    this.dir = dir;
    this.type = int(random(2));
    this.c = color(random(255),random(255),random(255));
  }

  action(){
    this.display

  }

  display() {
    fill(this.color);
    if (this.type === 0) {

    }
    else if (this.type === 1){

    }
  }

  drawCar() {
    fill(this.c);
    rect(this.x, this.y, 100, 40);
  }
  

  drawTruck(){
    fill(this.c);
    ellipse(this.x, this.y, 70, 40);
  }

  move() {
    for (let x = 0; x < windowWidth; x+=40) {

    }

  }
}





