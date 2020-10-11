var bullet,bulletI,wall;
var speed,thickness,weight;
var damage
function preload(){
  bulletI = loadImage("bullet.webp")
}
function setup(){
  createCanvas(1600,400);
thickness = random(22,83);
wall = createSprite(1200,200,thickness,height/2);
bullet = createSprite(100,200,40,10);
bullet.shapeColor="white";
bullet.addImage("bullet",bulletI);
bullet.scale=0.2;
speed=random(223,321);
bullet.velocityX=speed;
weight=random(30,52);
}

function draw(){
background("black");
if(collide(bullet,wall)){
  bullet.velocityX=0;
damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);
if(damage>10){
  wall.shapeColor="red";
}
if(damage<10){
  wall.shapeColor="green";
}
}

drawSprites();
}


