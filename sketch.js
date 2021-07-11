var hr , mn , sc;

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  angleMood(DEGREES);
}

function draw() {
  background(0);
  translate(200,200)
  rotate (-90); 

  hr = hour();
  mn = minute();
  sc = second();

  strokeWeight(8);
  stroke("yellow");
  noFill();
  let scAngle = map(sc,0,60,0,360);
  arc(0,0,300,300,0,end);
  
  stroke("Pink");
  let mnAngle = map(mn,0,60,0,360);
  arc(0,0,280,280,0,end2);
  
  stroke("Light blue");
  let hrAngle = map(hr%12,0,12,-0,360);
  arc(0,0,260,260,0,end3);
  
  push();
  rotate(scAngle);
  stroke("blue");
  line(0,0,100,0);
  pop();
  
  
  push();
  rotate(mnAngle);
  stroke("red");
  line(0,0,75,0);
  pop();
  
  push();
  rotate(hrAngle);
  stroke("green");
  line(0,0,50,0);
  pop();
  
  stroke("Black");
  point (0,0);

  drawSprites();
}