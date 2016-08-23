function setup() {
  createCanvas(480,480);
  background(204);
}

function draw() {
  if (mouseIsPressed) {
  translate(mouseX, mouseY);
  scale(mouseY / 100.0);
  ellipse(0, 0, 30, 30);
  }
}