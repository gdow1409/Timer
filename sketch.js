var hr,mn,sc,hrAngle,mnAngle,scAngle



function setup() {
  createCanvas(800,400);
  angleMode(DEGREES)

}

function draw() {
  background(0,0,0); 
  translate (200,200)
  rotate (-90)
  hr = hour();
  mn = minute();
  sc = second();

  hrAngle = map (hr%12,0,12,0,360)
  mnAngle = map (mn,0,60,0,360)
  scAngle = map(sc,0,60,0,360)
  noFill()
  //hour
  push()

  rotate(hrAngle)
  stroke(255,0,0)
  strokeWeight (7)
  line(0,0,50,0)
  pop()
  stroke(255,0,0)
  arc (0,0,260,260,0,hrAngle)
  //minutes
  push()

  rotate(mnAngle)
  stroke(0,0,255)
  strokeWeight (7)
  line(0,0,75,0)
  pop()
  arc (0,0,280,280,0,mnAngle)
  //seconds
  push()

  rotate(scAngle)
  stroke(0,255,0)
  strokeWeight (7)
  line(0,0,100,0)
  pop()
  arc (0,0,260,260,0,hrAngle)
 
}

