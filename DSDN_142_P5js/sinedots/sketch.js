var circleX = 0;
var circleY = 10;

function setup() {
	createCanvas(500, 500);
	background(153, 179, 255);
}

function draw() {
  //Top Wave
  fill(153, 179, 255);
  stroke(102, 140, 255);
  ellipse(circleX, circleY, 50, 50);
  //Bottom Wave
  translate(-25, 50);
  stroke(255);
  ellipse(circleX, circleY, 50, 50);
  //More waves can be added by translating
  
  //reassigning stuff
  circleX = circleX + 2;
  circleY = circleY + sin(circleY * 5) / 10;
}