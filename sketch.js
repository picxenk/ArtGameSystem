let canvas;
let canvasWidth = 600;
let canvasHeight = 400;

// setup here
function setup() {
  canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.position(windowWidth/2 - canvasWidth/2, 20);
  noCursor(); // no show cursor
}

function draw() {
  background(30);
  ellipse(mouseX, mouseY, 100, 100);
}
