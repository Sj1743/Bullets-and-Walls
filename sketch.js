//declare globalised variables
var wall, thickness;
var bullet, speed, weight;
var damage;

function setup() {

  //canvas
  createCanvas(1600,400);

  //assign random values to thickness, speed, weight
  thickness = random(22,83);
  speed = random(223,321);
  weight = random(30,52);

  //create bullet sprite, assign velocity
  bullet = createSprite(50, 200, 50, 20);
  bullet.velocityX = speed;

  //create wall sprite, assign colour
  wall = createSprite(1200, 200, thickness, height/2);
  wall.shapeColor = ("grey");

  //declare damage
  damage = (0.5*weight*speed*speed)/(thickness*thickness*thickness);

  //print values in console
  console.log("Speed : " + speed);
  console.log("Weight : " + weight);
  console.log("Thickness : " + thickness);
  console.log("Damage : " + damage);

}

function draw() {

  //background
  background(255,255,255);  

  //when bullet collides with wall
  if (hasCollided(wall, bullet)){

    //if damage is less than 10, bullet colour green; else red
    if(damage < 10){
      bullet.shapeColor = "green";
    }else{
      bullet.shapeColor = "red";
    }
  }

  //draw all sprites
  drawSprites();
}