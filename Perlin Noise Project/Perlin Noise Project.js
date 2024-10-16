// Perlin Noise Project (Terrain Generation)

let rectWidth = 1;
let rTime = 0.5;
let rInterval = 0.01;
let noiseOffset = 0;

function setup() {
  createCanvas(windowWidth, WindowHeight);
  background(255);
  frameRate(30)
}

function generateTerrain() {
  rTime = 5 + frameCount / 20;
  let tHeight = 0;
  let count = 0;
  let peakY = 0;
  let peakX = 0;
  let peakY1 = 0;

  for (let x = 0; x <= windowWidth; x += rectWidth) {
    let rectHeight = noise(rTime);
    rectHeight = map(rectHeight, 0, 1, 0, 500);
    rTime += rInterval;
  }
}

