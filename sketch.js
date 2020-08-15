var bullet, wall;
var speed, weight, damage, thickness;

function setup() {
  createCanvas(1600,400);
  speed = random(223,321);
  weight = random(30,52);
  thickness = random(22,83);

  bullet = createSprite(50,250,40,20);
  wall = createSprite(1200, 250, thickness, height/2);
  bullet.velocityX = speed;
  bullet.shapeColor = color(255,255,255);
}

function draw() {
  background(1,1,1);  
    if(wall.x-bullet.x < ((bullet.width+wall.width)/2)){
      bullet.velocityX = 0;
      damage = (0.5*weight*speed*speed)/thickness*thickness*thickness;
      if (damage < 10){
        wall.shapeColor = color(0,127,0);
      } else if (damage > 10){
        wall.shapeColor = color(127,0,0);
      }
  }
  drawSprites();
  wall.shapeColor = color(80,80,80);
}