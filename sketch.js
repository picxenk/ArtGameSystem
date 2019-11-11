let canvas;
let canvasWidth = 600;
let canvasHeight = 400;

let walls;
let balls;
let left, bottom;
let ani;

function setup() {
  canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.position(windowWidth/2 - canvasWidth/2, 20);
  // noCursor();

  ani = loadAnimation('assets/001.png', 'assets/004.png');
  balls = new Group();
  walls = new Group();
  left = createSprite(0, 200, 10, 400);
  left.immovable = true;
  bottom = createSprite(300, 400);
  bottom.immovable = true;
  walls.add(left);
  walls.add(bottom);

  bottom.draw = function() {
    fill(255, 0, 0);
    rect(0, 0, 600, 10);
  }
  bottom.setCollider('rectangle', 0, 0, 600, 10);

}

function draw() {
  background(30);

  for (let i=0; i<balls.length; i++) {
    // balls[i].debug = true;

    balls[i].bounce(bottom);
    balls[i].bounce(left, killed);



  }
  drawSprites();
}

function mousePressed() {
  var s = createSprite(mouseX, mouseY, 30, 30);
  s.velocity.x = random(-5, 5);
  s.velocity.y = random(-5, 5);
  s.addAnimation('aa', ani);
  s.setCollider('circle', 0, 0, 35, 35);
  balls.add(s);
}

function killed(b, o) {
  b.remove();
}
