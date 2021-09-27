var h, m, s;
var hangle, mangle, sangle;

function setup() {
  createCanvas(500, 500);
  angleMode(DEGREES);
}

function draw() {
  background(0);

  translate(250, 250);
  rotate(-90);

  h = hour();
  m = minute();
  s = second();

  mangle = map(m, 0, 60, 0, 360);
  sangle = map(s, 0, 60, 0, 360);
  hangle = map(h % 12, 0, 12, 0, 360);

/*   push();
  fill("lightGrey");
  ellipse(0,0,400,400);
  pop(); */

  //shift Alt A

  push();
  stroke("blue");
  strokeWeight(5);
  rotate(sangle);
  line(0, 0, 120, 0);
  pop();

  push();
  stroke("green");
  strokeWeight(5);
  rotate(mangle);
  line(0,0,90,0);
  pop();

  push();
  stroke("red");
  strokeWeight(5);
  rotate(hangle);
  line(0,0,60,0);
  pop();

  noFill();
  stroke("blue");
  strokeWeight(5);
  arc(0,0,300,300,0,sangle);

  noFill();
  stroke("green");
  strokeWeight(5);
  arc(0,0,275,275,0,mangle);

  noFill();
  stroke("red");
  strokeWeight(5);
  arc(0,0,250,250,0,hangle);


}
