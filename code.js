var car, wall;
var weight,speed;
var deform;
function setup(){
  createCanvas(1600,800);
car = createSprite(50,200,20,10);

wall = createSprite(1500,200,60,800);

speed = random(55,90);
weight = random(400,1500);
car.velocityX = speed;
deform = 0.5*weight*speed*speed/22500;

}
function draw(){
  background("black");
  console.log(deform);
   car.collide(wall);
  if(deform>180){
    car.shapeColor=color(255,0,0);
    
  }
  if(deform>100 && deform<180){
    car.shapeColor=color(230,230,0);
    
  }
  if(deform<100){
    car.shapeColor=color(0,255,0);
  }
  
  
  drawSprites();
}