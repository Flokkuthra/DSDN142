import processing.pdf.*;
 
void setup() {
  size(3508, 4961, PDF, "export.pdf");  
  smooth();
  strokeWeight(4);
  colorMode(HSB, 360);
  background(0);
}
 
void draw() {
  translate(width/2, height/2);
  for (int deg = 0; deg < 360; deg++) {
    pushMatrix();
    rotate(radians(deg));
    translate(0, 1340);
    scale(map(sin(radians(deg*5.5)), -1, 1, 0.5, 1),
      map(sin(radians(deg*11)), -1, 1, 0.5, 1));
    noFill();
    stroke(deg, 200, 360);
    ellipse(0, 0, 650, 650);
    popMatrix();
  }
  exit();
}