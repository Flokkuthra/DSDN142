var axiom = "X";
var angle;
var sentence = axiom;
var length = 150;
var thickness = 4;

//Comment in and out different rules for different systems
var rules = [];
//Fractal3
rules[0] = {
	a: "X",
	b: "F[+X]F[-X]+X"
}

rules[1] = {
	a: "F",
	b: "FF"
}

//Fractal2
//rules[0] = {
	//a: "X",
	//b: "F−[[X]+X]+F[+FX]−X"
//}

//rules[1] = {
	//a: "F",
	//b: "FF"
//}

//Original L-System
//rules[0] = {
//	a: "F",
//	b: "FF+[+F-F-F]-[-F+F+F]"
//}

function generate() {
	length *= 0.51;
	var nextSentence = "";
	for (var i = 0; i < sentence.length; i++) {
			var current = sentence.charAt(i);
			var found = false;
			for (var j = 0; j < rules.length; j++) {
				if (current == rules[j].a) {
					found = true;
					nextSentence += rules[j].b;
					break;
			}
		}
		if (!found) {
			nextSentence += current;
		}
	}
	sentence = nextSentence;
	createP(sentence);
	turtle();
}

function turtle() {
	background(51);
	translate(width/2, height);
	stroke(255, 100);
	//strokeWidth(thickness);
	for (var i = 0; i < sentence.length; i++) {
		var current = sentence.charAt(i);

		if (current == "F") {
			line(0, 0, 0, -length);
			translate(0, -length);
		} else if (current == "+") {
			rotate(angle);
		} else if (current == "-") {
			rotate(-angle);
		} else if (current == "[") {
			push();
		} else if (current == "]") {
			pop();
		}
	}
}

function setup() {
	createCanvas(1000,1000);
	angle = radians(25);
	background(51);
	createP(axiom);
	turtle();
	var button = createButton("generate");
	button.mousePressed(generate);
}
