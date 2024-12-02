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
    let yEast = random(height / 1.9, height / 3  + height / 2.5)
    eastbound.push(new vehicle(random(width), yEast, floor(random(2)), 1, random(1,5)));

    let yWest = random(height / 3, height 2.1)
    westbound.push(new vehicle(random(width), yWest, floor(random(2)), 1, random(1,5)));
  }

}
function mouseClicked(){
  eastbound.push(new vehicle(mouseX, mouseY, 1));

}

0
function drawRoad(){
  fill(30, 30, 30);
  rect(0, windowHeight / 3, windowWidth, windowHeight / 2.5);

  fill(255);
  for (let x = 0; x < windowWidth; x += 100) {
    rect(x, windowWidth / 2, 2, 70, 10);
  }
}

class vehicle {
  constructor(x, y, type, dir, speed) {  //x, y, type, color, starting position, direction, x speed 
    this.x = x;
    this.y = y;
    this.dir = dir;
    this.type = int(random(2));
    this.c = color(random(255),random(255),random(255));
    this.speed = speed;
  }
  move(){
    this.x += this.speed * (this.dir === 0 ? -1 ; 1);
    if (this.x > width) {
      this.x = 0;
    }
    if ()
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





