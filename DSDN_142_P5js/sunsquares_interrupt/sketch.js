var angle = 0.0;
var angleIncre = 0.1;

function setup() {
  createCanvas(480, 480);
  background(200, 200, 0);
}

function draw() {
  //When mouse is clicked, squares are drawn and rotated
  if (mouseIsPressed) {
    rotate(angle);
    translate(mouseX, mouseY);
    fill(255, 0, 0);
    stroke(255, 200, 10);
    rect(-15, -15, 30, 30);
    angle += angleIncre;
  //When mouse is released, drawing stops
  } else {
    noFill();
    noStroke();
    rect(-15, -15, 30, 30);
  }
}
  //Press key to clear canvas
function keyPressed(){
  if (keyCode === LEFT_ARROW) {
    background (200, 200, 0);
  }
}