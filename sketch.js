var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight = 300;
var ground;

function setup() {
  createCanvas(480,800);
 
  ground = createSprite(0,750,500,10);
}

function draw() {
  background(255,255,255);
 

  for (var k = 0; k <=width; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }

  for (var j = 40; j <=width; j=j+50){
    plinkos.push(new Plinko(j,75));
  }
  for (var j = 15; j <=width-10; j=j+50){
    plinkos.push(new Plinko(j,175));
  }
  for (var j = 40; j <=width-20; j=j+50){
    plinkos.push(new Plinko(j,275));
  }
  for (var j = 15; j <=width-20; j=j+50){
    plinkos.push(new Plinko(j,375));
  }
  
  if(frameCount%60===0){
    particles.push(new Particle(random(width/2-10, width/2+10), 10,10));
  
  }

  for (var j = 0; j < particles.length; j++) {
    particles[j].display();
  }
  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }
  ground.display();
    drawSprites();
}