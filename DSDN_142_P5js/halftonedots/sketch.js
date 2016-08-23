var ellipsesize = 25

function setup() {
  createCanvas(480, 480);
  noStroke();
}

function draw() {
  background(0);
  for (var y = 0; y <= height; y += 7) {
    for (var x = 0; x <= width; x += 10) {
      ellipse(x + y, y, ellipsesize - y/6, ellipsesize - y/6);
    }
  }
}
  