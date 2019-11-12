let canvas;
let canvasWidth = 600;
let canvasHeight = 400;

// setup here
function setup() {
  canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.position(windowWidth/2 - canvasWidth/2, 20);
}

function draw() {
  background(255, 0, 0);
  drawSprites();
}

function mousePressed() {
  let s = createSprite(mouseX, mouseY, 30, 30);
  s.velocity.x = random(-5, 5);
  s.velocity.y = random(-5, 5);
}
