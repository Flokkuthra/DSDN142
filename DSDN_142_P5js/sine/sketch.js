var colors = [];

function setup() {

  createCanvas(1500,500);
  noFill();
  addColors();
  smooth(8);
  background(102, 140, 255);
	noLoop();
}


function addColors() {
  var c;
  c = color(26, 83, 255);
  colors[0] = c;
  c = color(0, 26, 102);
  colors[1] = c;
  c = color(0, 38, 153);
  colors[2] = c;
  


}

function getRandomColor() {

  var i = Math.floor(random(colors.length));
  var c = colors[i];
  return c;

}


function draw() {
  translate(0, 100);
  makeRibbons();

}




function makeRibbons() {

  for (var i=0; i < 25; i++) {
  
    var strokeW = random(5)+3;
    
    var amount = 100;
    var frequency = random(1.0)/15;
    var offset = random(200)+10;
    
    var col = getRandomColor();
    
    strokeWeight(strokeW);
    stroke(col,180);
    var startY = height/2;
    beginShape();
      vertex(0, startY);
       for (var c=1; c < amount; c++) {
         var sinoffset = sin(frequency*c);
         var sinX = c*(width/amount);
         var sinY = startY + (sinoffset*offset);
         bezierVertex(sinX,sinY,sinX,sinY-1,sinX,sinY);
       }
    endShape();
    
  }

  

}