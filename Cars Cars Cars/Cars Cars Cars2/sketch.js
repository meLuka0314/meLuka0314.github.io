// Cars Cars Cars 
// Luka Sullivan

let eastbound = [];
let westbound = [];
let trafficLight;

function setup() {
  createCanvas(windowWidth, windowHeight);

  for (let i = 0; i < 20; i++)  {
    let yEast = random(height / 1.9, height / 3 + height / 2.5);
    eastbound.push(new vehicle(random(width), yEast, floor(random(2)), 1, random(1, 5)));

    let yWest = random(height / 3, height / 2.1);
    westbound.push(new vehicle(random(width), yWest, floor(random(2)), 0, random(1, 5)));

    trafficLight = new TrafficLight(width / 2, height / 3 - 40);
  }
}


function draw(){
  background(220);
  drawRoad();
  trafficLight.update();
  trafficLight.display();
  
  

  let canMove = trafficLight.state === "green";

  for (let i = 0; i < eastbound.length; i++) {
    if (canMove) {
      eastbound[i].action();
    }
    else {
      eastbound[i].display();
    }
  } 

  for (let i = 0; i < westbound.length; i++) {
    if (canMove) {
      westbound[i].action();
    }
    else {
      westbound[i].display();
    }
  }


}

function mouseClicked(){
  let yEast = random(height / 1.9, height / 3 + height / 2.5);
  let yWest = random(height / 3, height / 2.1);

  if (keyIsDown(SHIFT)) {
    westbound.push(new vehicle(mouseX, yWest, floor(random(2)), 0, random(1, 5)));
  } else {
    eastbound.push(new vehicle(mouseX, yEast, floor(random(2)), 1, random(1, 5)));
  }
}

function drawRoad(){
  noStroke();
  fill(30, 30, 30);
  rect(0, windowHeight / 3, windowWidth, windowHeight / 2.5);

  let roadMiddle = windowHeight / 3 + windowHeight / 5;
  fill(255);
  for (let x = 0; x < windowWidth; x += 100) {
    rect(x, roadMiddle, 70, 10);
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
    this.x += this.speed * (this.dir === 0 ? -1 : 1);
    if (this.x > width) {
      this.x = 0;
    }
    if (this.x < 0) {
      this.x = width;
    }
  }


  display() {
    fill(this.c);
    if (this.type === 0) {
      this.drawCar();
    } else if (this.type === 1) {
      this.drawTruck();
    }
  }

  drawCar() {
    push();
    translate(this.x, this.y);
    rect(-25, -10, 60, 25, 10);
    pop();
  }
  
  speedUp() {
    if (this.speed < 15) {
      this.speed += 0.5;
    }
  }
  speedDown(){
    if (this.speed > 0) {
      this.speed -= 0.5;
    }
  }

  changeColor() {
    this.color = color(random(255), random(255), random(255));
  }


  drawTruck(){
    push();
    translate(this.x, this.y);
    fill(this.c);
    rect(-40, -15, 80, 30);
    pop();
  }

  action(){
    this.move();
    if (random(1) < 0.01) {
      this.speedUp();
    }
    if (random(1) < 0.01) {
      this.speedDown();
    }
    if (random(1) < 0.01) {
      this.changeColor();
    }
    this.display()
    
  }
}

class TrafficLight {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.state = "green";
    this.timer = 0
  }





  

  display() {
    fill(50);
    rect(this.x, this.y - 30, 30, 60);

    let lightColor = this.state === "green" ? "green" : "red";
    fill(lightColor);
    ellipse(this.x + 15, this.y - 15, 30, 30);
    
  }

  toggle() {
    if (this.state === "green") {
      this.state = "red";
      this.timer = 120;
    }
  }

  update() {
    if (this.state === "red") {
      if (this.timer > 0) {
        this.timer--;
      } else {
        this.state = "green";
      }
    }
  }
}

function keyPressed() {
  if (key === ' ') {
    trafficLight.toggle();
  }
}





