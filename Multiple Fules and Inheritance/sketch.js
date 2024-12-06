let scale = 15;


function setup() {
  createCanvas(500, 500);
  background(255);
  for (let i =0; i<10; i++) {
    Object.push(new AnimatedObject);
  }
}

class AnimatedObject{
  constructor(x, y) {
    this.x = x;
    this.y = y;

  }
}