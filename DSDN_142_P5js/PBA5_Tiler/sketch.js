//This code is a good place to get started, you can draw things inside the tile() function.
//for today's PBA your goal is to create an interesting tiled pattern using this code.


//play around with these variables
var TILER_globals = {
	tile_width: 120.0,
	tile_height:120.0
}

function setup() {
	createCanvas(window.innerWidth, window.innerHeight);
}

function draw() {
  	background(200);

  	for(var i = 0; i < width/TILER_globals.tile_width; ++i){
		for(var j = 0; j < height/TILER_globals.tile_height; ++j){
			push();
				translate(i*TILER_globals.tile_width, j*TILER_globals.tile_height);
				tile();
			pop();
		}
  	}
}

function tile(){
	//draw some awesome stuff here!
	//your tile size is defined by TILER_globals.tile_width and TILER_globals.tile_height
		//TILE SET 1
			//line(0,0,120,120);
			//fill(64);
			//triangle(0,0,0,120,120,120);
			//fill(255);
			//rect(20,20,80,80);
			//arc(60,60,80,80,PI+HALF_PI,TWO_PI);
			//arc(60,60,80,80,HALF_PI, PI);
			//fill(255);
			//ellipse(0,60,10,10);
			//ellipse(60,0,10,10);
			//strokeWeight(10);
			//fill(50,237,162);
			//ellipse(60,60,50,50);
		//TILE SET 2
			strokeWeight(2);
			strokeJoin(ROUND);
			quad(10,95,60,80,110,95,60,110);
			quad(10,90,60,75,110,90,60,105);
			quad(10,85,60,70,110,85,60,100);
			quad(10,80,60,65,110,80,60,95);
			quad(10,75,60,60,110,75,60,90);
			fill(64);
			strokeWeight(0);
			ellipse(60,75,40,15);
			strokeWeight(2);
			strokeJoin(ROUND);
			fill(255);
			ellipse(60,55,40,40);

}